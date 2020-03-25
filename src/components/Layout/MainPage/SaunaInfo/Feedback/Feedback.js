import React from 'react';
import { connect } from 'react-redux';

import Comment from './Comment/Comment';

import { reloadFeedback } from '../../../../../store/actions/actionCreators';

class Feedback extends React.Component{

    componentDidMount(){
        this.props.getFeedback();
    }

    render(){
        return (
            <div>
                <ul>
                    {
                        this.props.feedback.map(({rate, comment})=>(
                            <li key={rate+comment}>
                                <Comment
                                rate={rate}
                                comment={comment}/>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps)=>(
    {
        //первая либо вторая сауна
        feedback:state[ownProps.sauna].feedback.comments,
        backend:state.backend
    }
);

const mapDispatchToProps = (dispatch, ownProps)=>(
    {
        getFeedback: ()=>dispatch(reloadFeedback(ownProps.sauna))
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);