import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

export default class BookList extends Component {
    static contextType = ThemeContext
    render() {


        return (
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark } = context;
                const theme = isLightTheme ? light : dark
                return (
                    <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
                        <ul>
                            <li style={{ background: theme.ui }}> Game of throuns </li>
                            <li style={{ background: theme.ui }}> La casa de papel </li>
                            <li style={{ background: theme.ui }}> Breaking bad </li>
                            <li style={{ background: theme.ui }}> Friends </li>
                            <li style={{ background: theme.ui }}> Mr Robot </li>
                        </ul>

                    </div>
                )
            }}

            </ThemeContext.Consumer>
        )
    }
}
