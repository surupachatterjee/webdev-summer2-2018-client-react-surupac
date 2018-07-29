import React from 'react'
import CourseList from './CourseList'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import CourseEditor from './CourseEditor'
import CourseCardList from "./CourseCardList";
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {widgetReducer} from "../reducers/widgetReducer";
import WidgetListContainer from "./widgets/WidgetListContainer";

/*import CourseCard from "../components/CourseCard";*/


let store = createStore(widgetReducer);

class WhiteBoard extends React.Component {
    render() {
        return (
<Provider store = {store}>
            <Router>
                <div className="container-fluid">
                    {/*<h1>Course Manager</h1>*/}
                    <Link to="/course/list">CourseList</Link>  |
                    <Link to="/course/cardlist">CourseCard</Link> |
                    {/*<Link to="/widgets">Widgets</Link><br/>*/}
                    <Route path="/course/list"
                           component={CourseList}>
                    </Route>
                    <Route path="/course/cardlist"
                           component={CourseCardList}>
                    </Route>
                    <Route path="/course/:courseId/edit"
                           component={CourseEditor}>
                    </Route>
                    {/*<Route path="/course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId"
                           component={WidgetListContainer}>
                    </Route>*/}

                    {/*<Route path="/coursecard"
                    component={CourseCard}>
                    </Route>*/}

                </div>
            </Router>
</Provider>
        )

    }

}

export default WhiteBoard;