import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { expect } from 'chai'
import jsdom from 'jsdom-global'
import ReactImage from '../src/index'

const props = {
    loading: 'data:image/gif;base64,R0lGODlhQABAALMLAOHh4dbW1rq6uoGBgTQ0NAEBARsbG8TExJeXl1RUVLOzs////wAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2MDBBQ0U3OTQ2MDIxMUU4ODQ4MUExQzFENzI3QTlEQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBBQ0U3QTQ2MDIxMUU4ODQ4MUExQzFENzI3QTlEQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMEFDRTc3NDYwMjExRTg4NDgxQTFDMUQ3MjdBOURDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjYwMEFDRTc4NDYwMjExRTg4NDgxQTFDMUQ3MjdBOURDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp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',
    error: 'data:image/png;base64,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',
    empty: 'data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=',
}

Enzyme.configure({
    adapter: new Adapter(),
})

describe('<ReactImage />', () => {
    before((done) => {
        jsdom()
        done()
    })

    describe('<ReactImage /> render with no src', () => {
        it('should have default src', () => {
            const wrapper = shallow(<ReactImage />)
            expect(wrapper.props().src).to.equal(props.empty)
        })

        it('should have custom emptyCls', () => {
            const wrapper = shallow(<ReactImage emptyCls='emptyCls' />)
            expect(wrapper.hasClass('emptyCls')).to.equal(true)
        })

        it('should have custom empty typeof string', () => {
            const wrapper = shallow(<ReactImage empty={props.error} />)
            expect(wrapper.props().src).to.equal(props.error)
        })

        it('should have custom empty typeof node', () => {
            const wrapper = shallow(<ReactImage empty={<span>should have custom empty typeof node</span>} />)
            expect(wrapper.html()).to.equal('<span>should have custom empty typeof node</span>')
        })
    })

    describe('<ReactImage /> render with error src', () => {
        it('should have default src', () => {
            const wrapper = shallow(<ReactImage src='error' />)

            wrapper.setState({
                isLoading: false,
                isLoaded: false,
            })

            expect(wrapper.props().src).to.equal(props.error)
        })

        it('should have custom errorCls', () => {
            const wrapper = shallow(<ReactImage src='error' errorCls='errorCls' />)

            wrapper.setState({
                isLoading: false,
                isLoaded: false,
                className: 'errorCls',
            })

            expect(wrapper.hasClass('errorCls')).to.equal(true)
        })

        it('should have custom error', () => {
            const wrapper = shallow(<ReactImage src='error' error={props.empty} />)

            wrapper.setState({
                isLoading: false,
                isLoaded: false,
            })

            expect(wrapper.props().src).to.equal(props.empty)
        })

        it('should have custom error typeof node', () => {
            const wrapper = shallow(<ReactImage src='error' error={<span>should have custom error typeof node</span>} />)

            wrapper.setState({
                isLoading: false,
                isLoaded: false,
            })

            expect(wrapper.html()).to.equal('<span>should have custom error typeof node</span>')
        })
    })

    describe('<ReactImage /> render with loading', () => {
        it('should have default loading', () => {
            const wrapper = shallow(<ReactImage src={props.empty} />)
            expect(wrapper.props().src).to.equal(props.loading)

            wrapper.setState({
                isLoading: false,
                isLoaded: true,
            })

            expect(wrapper.props().src).to.equal(props.empty)
        })

        it('should have custom loadingCls', () => {
            const wrapper = shallow(<ReactImage src={props.empty} loadingCls='loadingCls' />)
            expect(wrapper.hasClass('loadingCls')).to.equal(true)

            wrapper.setState({
                isLoading: false,
                isLoaded: true,
            })

            expect(wrapper.props().src).to.equal(props.empty)
        })

        it('should have custom loading', () => {
            const wrapper = shallow(<ReactImage src={props.empty} loading={props.error} />)
            expect(wrapper.props().src).to.equal(props.error)

            wrapper.setState({
                isLoading: false,
                isLoaded: true,
            })

            expect(wrapper.props().src).to.equal(props.empty)
        })

        it('should have custom loading typeof node', () => {
            const wrapper = shallow(<ReactImage src={props.empty} loading={<span>should have custom loading typeof node</span>} />)
            expect(wrapper.html()).to.equal('<span>should have custom loading typeof node</span>')

            wrapper.setState({
                isLoading: false,
                isLoaded: true,
            })

            expect(wrapper.props().src).to.equal(props.empty)
        })
    })

    describe('<ReactImage /> unmount', () => {
        it('should have been unmount', () => {
            const wrapper = shallow(<ReactImage src={props.empty} />)
            const inst = wrapper.instance()

            inst.componentDidMount()
            wrapper.unmount()

            expect(inst.$image).to.equal(undefined)
        })
    })
})
