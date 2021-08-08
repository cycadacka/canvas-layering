/**
 * @typedef Viewport
 * @property {(canvas: HTMLCanvasElement, index?: number) => Viewport} add
 * @property {(index: number) => Viewport} remove
 * @property {(index: number) => HTMLCanvasElement} get
 */

const CanvasLayering = {
  /**
   * @param {HTMLDivElement} viewport
   * @return {Viewport}
   */
  create(viewport) {
    if (!viewport.classList.contains('cl-viewport')) {
      viewport.classList.add('cl-viewport');
    }

    return {
      add(canvas, index = viewport.childElementCount) {
        canvas.style.zIndex = index;
        canvas.width = viewport.clientWidth;
        canvas.height = viewport.clientHeight;
        viewport.append(canvas);

        return this;
      },
      remove(index) {
        if (index >= 0) {
          viewport.remove(viewport.children[index]);

          for (let i = index; i < viewport.children.length; i++) {
            --viewport.children[i].style.zIndex;
          }
        }

        return this;
      },
      get(index) {
        if (index >= 0 && index < viewport.childElementCount) {
          return viewport.children[index];
        }

        return null;
      },
    };
  },
};

export default CanvasLayering;
