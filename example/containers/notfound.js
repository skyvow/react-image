import React from 'react'

class NotFound extends React.Component {
    constructor (props) {
	    super(props)
    }

    goBack = () => {
        window.history.go(-1)
    }

    goIndex = () => {
        window.location.href = '#/'
    }

  	render () {
	    return (
            <div className='not-found'>
                <h1 className='not-found-title'>404</h1>
                <p className='not-found-text'>不要悲伤，不要绝望，灰暗的日子依然会来临！</p>
                <p className='not-found-text'>现在</p>
                <span onClick={this.goBack} className='link-style'>返回上一页</span>
                <span>或者</span>
                <span onClick={this.goIndex} className='link-style'>跳转首页</span>
            </div>
	    )
  }
}

export default NotFound
