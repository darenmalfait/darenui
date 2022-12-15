class Config {
  constructor() {
    this.defaultOptions = {}
  }

  defineOptions(editor, options) {
    // eslint-disable-next-line no-multi-assign
    if (!editor.$options) this.defaultOptions = editor.$options = {}
    Object.keys(options).forEach(key => {
      const opt = options[key]
      opt.name || (opt.name = key)
      editor.$options[opt.name] = opt
      if ('initialValue' in opt) editor[`$${opt.name}`] = opt.initialValue
    })

    editor.setOptions = function setOptions(opts) {
      Object.keys(opts).forEach(function keys(key) {
        this.setOption(key, opts[key])
      }, this)
    }

    editor.getOptions = function getOptions() {
      const result = {}
      const opts = this.$options
      Object.keys(opts).forEach(key => {
        result[key] = this.getOption(key)
      }, this)
      return result
    }

    editor.setOption = function setOption(name, value) {
      if (this[`$${name}`] === value) return
      const option = this.$options[name]
      this[`$${name}`] = value
      if (option && option.set) option.set.call(this, value)
    }

    editor.getOption = function getOption(name) {
      const option = this.$options[name]
      return option && option.get ? option.get.call(this) : this[`$${name}`]
    }

    return this
  }

  reset(editor) {
    Object.keys(editor.$options).forEach(key => {
      const opt = editor.$options[key]
      if ('value' in opt) editor.setOption(key, opt.value)
    })
  }
}

const config = new Config()

export {config}
