import React from 'react';
import { connect } from 'react-redux';

import Comment from './Comment/Comment';

import { reloadFeedback } from '../../../../../store/actions/actionCreators';

import cssClasses from './Feedback.module.css';
import { NavLink } from 'react-router-dom';

class Feedback extends React.Component{

    componentDidMount(){
        this.props.getFeedback();
    }

    render(){
        return (
            <div className={cssClasses.Feedback}>
                <ul>
                    {
                        this.props.feedback.map(({rate, comment, user})=>(
                            <li key={rate+comment}>
                                <Comment
                                rate={rate}
                                comment={comment}
                                user={user}/>
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