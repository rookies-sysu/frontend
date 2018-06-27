// component/orderItem/order-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name: {
      type: String,
      value: '订单食物名称'
    },

    number: {
      type: Number,
      value: 0
    },

    sum: {
      type: Number,
      value: 0
    },

    index: {
      type: Number,
      value: 0
    },

    orderedNumber: {
      type: Number,
      value: 0
    },

    selfOrder : {
      type: Number,
      value: 1
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    minusFromCart: function () {
      //console.log('trigger minus')
      if (!this.data.selfOrder) {
        wx.showModal({
          title: "提示",
          content: "不能修改别人的订单哦~",
          showCancel: false,
        })
        return;
      }

      if (this.data.orderedNumber != 0 && this.data.orderedNumber == this.data.number) {
        wx.showModal({
          title: "提示",
          content: "该商品不能再减少哦~",
          showCancel: false,
        })
      }
      var eventDetail = { index: this.data.index }
      this.triggerEvent('minusEvent', eventDetail, {}) //触发minusEvent事件
    },

    addToCart: function () {
      //console.log('trigger add')
      if (!this.data.selfOrder) {
        wx.showModal({
          title: "提示",
          content: "不能修改别人的订单哦~",
          showCancel: false,
        })
        return;
      }
      var eventDetail = { index: this.data.index }
      this.triggerEvent('addEvent', eventDetail, {}) //触发addEvent事件
    }
  }
})
