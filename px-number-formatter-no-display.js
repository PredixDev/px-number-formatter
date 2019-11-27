/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/**
A wrapper for px-number-formatter-behavior to provide declarative number formatting without display.

##### Usage

    <px-number-formatter-no-display
        value="1000"
        format="0,0">
    </px-number-formatter-no-display>

@element px-number-formatter-no-display
@blurb A wrapper for the [numbro.js](http://numbrojs.com/) library.
@homepage index.html
@demo index.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import './px-number-formatter-behavior.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`

`,

  is: 'px-number-formatter-no-display',

  behaviors: [
    PxNumberFormatter.formatter
  ],

  properties: {}
});
