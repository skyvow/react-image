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
        }
    }

    render () {
        const { items } = this.state

        return (
            <section className='col-md-8 col-md-offset-2 card-wrapper'>
                <div className='card background-card'>
                    <h4 className='text-uppercase'>代码演示</h4>
                    <hr />
                    <section className='mb-50'>
                        <h5 className='box-title text-uppercase'>资源加载中</h5>
                        <div className='row'>
                            <div className='col-md-3'>
                                <div className='image'>
                                    <ReactImage src='https://unsplash.it/900/900/?random&st=1' />
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='image'>
                                    <ReactImage src='https://unsplash.it/900/900/?random&st=2' loadingCls='loadingCls' loadedCls='loadedCls' />
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='image'>
                                    <ReactImage src='https://unsplash.it/900/900/?random&st=3' loading={loading} />
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='image'>
                                    <ReactImage src='https://unsplash.it/900/900/?random&st=4' loading={<Loading />} />
                                </div>
                            </div>
                        </div>
                        <h5 className='box-title text-uppercase'>资源加载失败</h5>
                        <div className='row'>
                            <div className='col-md-3'>
                                <div className='image'>
                                    <ReactImage src='error' />
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='image'>
                                    <ReactImage src='error' errorCls='errorCls' />
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='image'>
                                    <ReactImage src='error' error={error} />
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='image'>
                                    <ReactImage src='error' error={<div style={{ textAlign: 'center', marginTop: 80 }}>资源加载失败</div>} />
                                </div>
                            </div>
                        </div>
                        <h5 className='box-title text-uppercase'>资源不存在</h5>
                        <div className='row'>
                            <div className='col-md-3'>
                                <div className='image'>
                                    <ReactImage src='' />
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='image'>
                                    <ReactImage src='' emptyCls='emptyCls' />
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='image'>
                                    <ReactImage src='' empty={empty} />
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='image'>
                                    <ReactImage src='' empty={<div style={{ textAlign: 'center', marginTop: 80 }}>资源不存在</div>} />
                                </div>
                            </div>
                        </div>
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
