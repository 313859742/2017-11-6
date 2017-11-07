import React,{Component} from 'react';

export default class extends Component{

    render(){
        let {
            id,
            content,
            isActive,
            todoOnChange,
            deleteToto
        } = this.props;
        return (
            <li
                className={isActive ? '' : "completed"}
            >
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={!isActive}
                        onChange={ ()=>todoOnChange(id) }
                    />
                    <label>
                        {content}
                    </label>
                    <button
                        className="destroy"
                        onClick={ ()=> deleteToto(id) }
                    />
                </div>
                <input
                    ref="editField"
                    className="edit"
                />
            </li>
        )
    }
}
