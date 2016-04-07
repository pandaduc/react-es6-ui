import React, {Component} from 'react';
import Button from './Button';

export default class Main extends Component {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <Button disabled="true"/>
                <Button text="Secondary" />
                <Button text="Third" />
            </div>
            
        )
    }
}