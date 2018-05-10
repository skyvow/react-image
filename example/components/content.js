import React from 'react'
import ReactImage from '../../dist/index'
import Loading from './Loading'
import loading from '../assets/images/loading.gif'
import error from '../assets/images/error.png'
import empty from '../assets/images/empty.png'

class Content extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            items: [
                {
                    prop: 'debug',
                    desc: '是否开启调试',
                    type: 'boolean',
                    value: 'false',
                },
                {
                    prop: 'loading',
                    desc: '资源加载中的状态',
                    type: 'string|ReactNode',
                    value: '-',
                },
                {
                    prop: 'loadingCls',
                    desc: '资源加载中时组件的类属性，仅当 loading 为 string 时才生效',
                    type: 'string',
                    value: '-',
                },
                {
                    prop: 'loadedCls',
                    desc: '资源加载完成时组件的类属性',
                    type: 'string',
                    value: '-',
                },
                {
                    prop: 'error',
                    desc: '资源加载失败的状态',
                    type: 'string|ReactNode',
                    value: '-',
                },
                {
                    prop: 'errorCls',
                    desc: '资源加载失败时组件的类属性，仅当 error 为 string 时才生效',
                    type: 'string',
                    value: '-',
                },
                {
                    prop: 'empty',
                    desc: '资源不存在的状态',
                    type: 'string|ReactNode',
                    value: '-',
                },
                {
                    prop: 'emptyCls',
                    desc: '资源不存在时组件的类属性，仅当 empty 为 string 时才生效',
                    type: 'string',
                    value: '-',
                },
                {
                    prop: 'src',
                    desc: '资源地址',
                    type: 'string',
                    value: '-',
                },
            ],
            data: [
                {
                    title: '资源加载中',
                    images: [
                        {
                            src: 'https://unsplash.it/900/900/?random&st=1',
                        },
                        {
                            src: 'https://unsplash.it/900/900/?random&st=2',
                            loadingCls: 'loadingCls',
                            loadedCls: 'loadedCls',
                        },
                        {
                            src: 'https://unsplash.it/900/900/?random&st=3',
                            loading,
                        },
                        {
                            src: 'https://unsplash.it/900/900/?random&st=4',
                            loading: <Loading />,
                        },
                    ]
                },
                {
                    title: '资源加载失败',
                    images: [
                        {
                            src: 'error',
                        },
                        {
                            src: 'error',
                            errorCls: 'errorCls',
                        },
                        {
                            src: 'error',
                            error,
                        },
                        {
                            src: 'error',
                            error: <div style={{ textAlign: 'center', marginTop: 80 }}>资源加载失败</div>,
                        },
                    ]
                },
                {
                    title: '资源不存在',
                    images: [
                        {
                            src: '',
                        },
                        {
                            src: '',
                            emptyCls: 'emptyCls',
                        },
                        {
                            src: '',
                            empty,
                        },
                        {
                            src: '',
                            empty: <div style={{ textAlign: 'center', marginTop: 80 }}>资源不存在</div>,
                        },
                    ]
                }
            ]
        }
    }

    refresh = (data = []) => {
        return data.map((n, i) => {
            if (Array.isArray(n.images)) {
                return Object.assign({}, n, {
                    images: n.images.map((m, j) => {
                        return Object.assign({}, m, {
                            src: m.src && m.src !== 'error' ? `https://unsplash.it/900/900/?random=${i}&key=${j}&st=${Date.now()}` : m.src,
                        })
                    })
                })
            }
            return n
        })
    }

    onClick = () => {
        this.setState({
            data: this.refresh(this.state.data),
        })
    }

    render () {
        const { items, data } = this.state

        return (
            <section className='col-md-8 col-md-offset-2 card-wrapper'>
                <div className='card background-card'>
                    <button type='button' className='btn btn-default btn-refresh' onClick={this.onClick}>Refresh</button>
                    <h4 className='text-uppercase'>代码演示</h4>
                    <hr />
                    <section className='mb-50'>
                        {data.map((n, i) => {
                            return (
                                <div key={i}>
                                    <h5 className='box-title text-uppercase'>{n.title}</h5>
                                    <div className='row'>
                                        {n.images.map((m, j) => {
                                            return (
                                                <div className='col-md-3' key={j}>
                                                    <div className='image'>
                                                        <ReactImage {...m} />
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </section>
                    <h4 className='text-uppercase'>API</h4>
                    <hr />
                    <section>
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        属性
                                    </th>
                                    <th>
                                        说明
                                    </th>
                                    <th>
                                        类型
                                    </th>
                                    <th>
                                        默认值
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((n) => {
                                    return (
                                        <tr key={n.prop}>
                                            <td>{n.prop}</td>
                                            <td>{n.desc}</td>
                                            <td>{n.type}</td>
                                            <td>{n.value}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </section>
                </div>
            </section>
        )
    }
}

export default Content
