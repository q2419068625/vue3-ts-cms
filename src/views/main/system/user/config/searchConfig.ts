import { IForm } from '@/base-ui/from/index'
export const formCofig: IForm = {
  formItems: [
    {
      filed: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      filed: 'password',
      type: 'password',
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      filed: 'motion',
      type: 'select',
      label: '喜欢运动',
      placeholder: '请选择喜欢运动',
      options: [
        { label: '篮球', value: 'basketball' },
        { label: '足球', value: 'football' }
      ]
    },
    {
      filed: 'time',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '请选择开始时间',
        endPlaceholder: '请选择结束时间',
        type: 'daterange'
      }
    }
  ]
}
