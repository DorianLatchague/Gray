/**
 * Copyright (c) Dorian Latchague.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, {Component} from 'react';
import { defaultGrayConfig } from '../../config';
import { GrayConfig } from '../../config/types';
import { onKeyUpListener } from './event_listeners';

class Gray extends Component {
    state: any;
    grayHistory: any[] = [];
    grayIndex: 0;
    grayConfig: GrayConfig;
    constructor(props: any) {
        super(props);
        this.grayConfig = props.grayConfig ? props.grayConfig : defaultGrayConfig;
    }
    componentDidMount() {
        document.addEventListener('keyup', onKeyUpListener.bind(this));
    }
    componentWillUnmount() {
        document.removeEventListener('keyup', onKeyUpListener.bind(this));
    }
    componentDidUpdate() {
        this.grayHistory.push(this.state);
    }
    render() {
        return this.props.children;
    }
}

export default Gray;