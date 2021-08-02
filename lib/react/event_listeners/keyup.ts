/**
 * Copyright (c) Dorian Latchague.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export default function(e) {
    if (e.key === this.grayConfig.undoKey && this.grayIndex > 0) {
        this.setState(this.grayHistory[--this.grayIndex]);
    }
    if (e.key === this.grayConfig.redoKey) {
        this.setState(this.grayHistory[++this.grayIndex]);
    }
}