<script>
  import { createEventDispatcher, onDestroy, onMount } from "svelte";
  import { sliderIndexMapper } from "../../stores";

  export let sequence;
  export let seqIndex;
  export let currentScale;

  let innerHeight = window.innerHeight;
  let heightSplitPart = 0;

  // this will ensure we have the correct split given the current screen height
  $: heightSplitPart = Math.floor(innerHeight / currentScale.length);

  let dragPos = { x: 0, y: 0 };
  let dragStartAt = { x: 0, y: 0 };
  let dragEl;
  let isDragging = false;
  let mapper;

  /* Init position with dragable elements position */

  onMount(() => {
    const rect = dragEl.getBoundingClientRect();
    sliderIndexMapper.update((m) => {
      m[seqIndex].sliderPos = rect.x;
      m[seqIndex].seqPos = seqIndex;
      return m;
    });

    heightSplitPart = Math.floor(innerHeight / currentScale.length);
    dragPos = { x: 0, y: findSliderHeight(sequence[seqIndex]) };
  });

  /* Store Subcriptions */

  const unsub = sliderIndexMapper.subscribe((m) => {
    mapper = m;
  });

  /* Event Dispatches */

  const dispatch = createEventDispatcher();

  function handleChange() {
    dispatch("SliderChange", sequence);
  }

  /* Mapoper functions */

  function findPart(num) {
    /* because we are playing with offset number for the relative position
    `num` will always  be negative becauase the original position is always at the bottom of the screen
    */
    num = Math.abs(num);
     const part = Math.abs(Math.floor((num - innerHeight) / heightSplitPart));
   // const part = Math.floor(num / heightSplitPart);

    if (part >= currentScale.length) {
      return currentScale.length - 1;
    }

    return currentScale.length - part;
  }

  function findSliderHeight(seqNote) {
    // Make sure part is within range
    if (seqNote < 0) return 0;
    if (seqNote >= currentScale.length) return currentScale.length - 1;
    // negative as we are moving slider in a relative positing
    const res = seqNote * heightSplitPart - innerHeight;

    return res;
  }

  /* Sort sequence index by x position */

  function updateSeqPosByXPos(mapper) {
    const sortedMapper = [...mapper].sort((a, b) => a.sliderPos - b.sliderPos);

    mapper.forEach((obj) => {
      const newPos = sortedMapper.findIndex(
        (sortedObj) => sortedObj.sliderPos === obj.sliderPos
      );
      obj.seqPos = newPos;
    });

    return mapper;
  }

  /* Drag n Drop */

  function handleMousedown(e) {
    e.preventDefault();
    isDragging = true;
    dragStartAt.x = e.clientX - dragPos.x;
    dragStartAt.y = e.clientY - dragPos.y;
  }

  function handleMousemove(e) {
    if (isDragging) {
      dragPos.x = e.clientX - dragStartAt.x;
      dragPos.y = e.clientY - dragStartAt.y;

      /*  update mapper slideRPos that will be used to sort
          the mapper in updateSeqPosByXPos()
        */

      sliderIndexMapper.update((m) => {
        m[seqIndex].sliderPos = e.clientX;
        return m;
      });
    }
  }

  /* All components must be updated */
  $: if (dragPos.y !== 0)
    sequence[mapper[seqIndex].seqPos] = findPart(dragPos.y);

  function handleMouseup() {
    isDragging = false;

    /*  update mapper basic on new x positions */
    sliderIndexMapper.update((m) => {
      return updateSeqPosByXPos(m);
    });

    handleChange();
  }

  /* Clean up */

  onDestroy(() => {
    unsub();
  });

</script>

<svelte:window bind:innerHeight />

<div
  bind:this={dragEl}
  class="slider-container"
  style="cursor: move; position: relative; left: {dragPos.x}px; top: {dragPos.y}px;"
  on:mousedown={handleMousedown}
  on:mousemove={isDragging ? handleMousemove : undefined}
  on:mouseup={isDragging ? handleMouseup : undefined}
  on:mouseleave={isDragging ? handleMouseup : undefined}
  role="slider"
  tabindex="0"
  aria-valuenow={0}
>
  <img src="images/SVG/{seqIndex + 1}.svg" alt="note" class="note-icon" />
</div>

<style>
  .slider-container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .note-icon {
    width: 100px;
  }
</style>
