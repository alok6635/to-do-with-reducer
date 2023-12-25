import Header from './components/Header/Header';
import Deleted from './components/deleted/Deleted';
import List from './components/list/List';
import TodoInput from './components/todoInput/TodoInput';
import TodoExportData from './store/TodoStore';

const App = () => {
    return (
        <>
            <TodoExportData>
                <Header />
                <div className="wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                <TodoInput />
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col"><h6>Active todo's</h6></div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <ul className="list-group">
                                    <List />
                                </ul>
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col"><h6>Completed todo's</h6></div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <ul className="list-group">
                                    <Deleted />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </TodoExportData>
        </>
    );

};

export default App;
