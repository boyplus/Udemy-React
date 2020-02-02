import React from 'react';
import { Field, reduxForm } from 'redux-form';
class StreamCreate extends React.Component {
    renderInput({ input, label }) {
        return (
            <div className="field">
                <label>{label}</label>
                {/* make all object in props as the props in input tag */}
                {/* ex value={this.formProps.input.value} */}
                <input {...input} />
            </div>
        );
    }
    onSubmit(formValues) {
        console.log(formValues);
    }
    render() {
        // console.log(this.props);
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                    <Field
                        name="title"
                        component={this.renderInput}
                        label="Enter title"
                    />
                    <Field
                        name="description"
                        component={this.renderInput}
                        label="Enter description"
                    />
                    <button className="ui button primary">Submit</button>
                </form>
            </div>
        );
    }
}
export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);
