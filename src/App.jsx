import React, { Component } from "react";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { pages: [] };
        this.exposedStates = [];
        this.pageId = 1;
    }

    updatePageState(name, exposeReadOnlyState) {
        let page = this.exposedStates.filter(m => m.name === name)[0];
        if (page) {
            let index = this.exposedStates.indexOf(page);
            let pageState = exposeReadOnlyState();
            this.exposedStates[index].exposedState = pageState;
        }
    }

    getPageState(pageName) {
        let page = this.exposedStates.filter(m => m.name === pageName)[0];
        if (page) return page.exposedState;
        else return null;
    }

    addPage(name, icon, type, selected) {
        this.exposedStates.push({ name: name, exposedState: {} });
        this.state.pages.push({
            id: this.pageId++,
            name: name,
            icon: icon,
            type: type,
            selected: selected
        });
    }

    renderPageByDescriptor(page) {
        const TagName = page.type;
        return (
            <TagName
                id={page.name}
                key={page.id}
                hidden={!page.selected}
                requestExposedStateUpdate={exposePageReadOnlyState => {
                    this.updatePageState(page.name, exposePageReadOnlyState);
                }}
                getExposedState={this.getPageState.bind(this)}
            />
        );
    }

    selectPage(pageId) {
        let modified = this.state.pages.map(a => Object.assign({}, a));
        for (let i = 0; i < modified.length; i++) {
            if (modified[i].id === pageId) modified[i].selected = true;
            else modified[i].selected = false;
        }
        this.setState({ pages: modified });
    }

    getPageIconClasses(pageId) {
        for (let i = 0; i < this.state.pages.length; i++)
            if (this.state.pages[i].id === pageId)
                if (this.state.pages[i].selected) return "lgSelected";
        return " ";
    }

    render() {
        return (
            <div id="lgWrapper" className="toggled">
                <div id="sidebar-wrapper">
                    <ul className="sidebar-nav">
                        <li className="sidebar-brand">
                            <a href="#">LG</a>
                        </li>
                        {this.state.pages.map(page => (
                            <li
                                key={page.id}
                                onClick={() => {
                                    this.selectPage(page.id);
                                }}
                            >
                                <a
                                    href="#"
                                    className={this.getPageIconClasses(page.id)}
                                >
                                    <FontAwesomeIcon icon={page.icon} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div id="page-content-wrapper">
                    <div className="container-fluid">
                        {this.state.pages.map(page =>
                            this.renderPageByDescriptor(page)
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
