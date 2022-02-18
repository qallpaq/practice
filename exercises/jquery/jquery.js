const $ = (selector) => {
    const node = document.querySelector(selector)

    return new MyJquery(node)
}

class MyJquery {
    _node = null

    constructor(node) {
        this._node = node
    }

    /**
     * Добавить класс.
     */
    addClass(classes) {
        this._node.classList.add(classes)
        return this;
    }

    /**
     * Удалить класс.
     */
    removeClass(classes) {
        this._node.classList.remove(classes)
        return this;
    }

    /**
     * Удалить класс если он есть, или же добавить класс если его нет.
     */
    toggleClass(classes) {
        this._node.classList.contains(classes)
            ? this.removeClass(classes)
            : this.addClass(classes)

        return this
    }

    /**
     * Добавить стили.
     *
     * @param styles - объект, в котором ключ это свойство.
     *
     */
    css(styles) {
        for (const key in styles) {
            this._node.style[key] = styles[key]
        }

        return this
    }

    /**
     * @param eventType - тип события.
     * @param callback - функция, которая сработает при этом событии.
     */
    on(eventType, callback) {
        this._node.addEventListener(eventType, callback)

        return this
    }
}
