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
/* Common imports */
/* Common demo imports */
/* Imports for this component */
/* Demo DOM module */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-demo/px-demo-header.js';
import 'px-demo/px-demo-api-viewer.js';
import 'px-demo/px-demo-footer.js';
import 'px-demo/px-demo-configs.js';
import 'px-demo/px-demo-props.js';
import 'px-demo/px-demo-interactive.js';
import 'px-demo/px-demo-component-snippet.js';
import '../px-number-formatter.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <!-- Header -->
    <px-demo-header module-name="px-number-formatter" description="The px-number-formatter component is a wrapper of numbrojs  and creates a formatted string of a number and/or unformats a formatted string into a number." mobile="" tablet="" desktop="">
    </px-demo-header>

    <!-- Interactive -->
    <px-demo-interactive>
      <!-- Configs -->
      <px-demo-configs configs="[[configs]]" props="{{props}}" chosen-config="{{chosenConfig}}" slot="px-demo-configs"></px-demo-configs>

      <!-- Props -->
      <px-demo-props props="{{props}}" config="[[chosenConfig]]" slot="px-demo-props"></px-demo-props>

      <!-- Component ---------------------------------------------------------->
      <px-demo-component slot="px-demo-component">
        <p>Refer to the <a href="http://numbrojs.com/format.html" target="_blank">Numbro.js API</a> for information on the "format" strings you can use.</p>
        Original Number: [[props.value.value]]
        <br>
        <br>
        Formatted version: <px-number-formatter value="{{props.value.value}}" format="{{props.format.value}}" currency="{{props.currency.value}}" culture="{{props.culture.value}}" zero-format="{{props.zeroFormat.value}}">
        </px-number-formatter>
      </px-demo-component>
      <!-- END Component ------------------------------------------------------>

      <px-demo-component-snippet element-properties="{{props}}" element-name="px-number-formatter" scripts-includes="[[scriptsIncludes]]" slot="px-demo-component-snippet">
      </px-demo-component-snippet>
    </px-demo-interactive>

    <!-- API Viewer -->
    <px-demo-api-viewer source="px-number-formatter"></px-demo-api-viewer>

    <!-- Footer -->
    <px-demo-footer></px-demo-footer>
`,

  is: 'px-number-formatter-demo',

  properties: {

    props: {
      type: Object,
      value: function(){ return this.demoProps; }
    },

    configs: {
      type: Array,
      value: function(){
        return [
          { configName: "Default",
            configReset: true }
        ];
      }
    },

    scriptsIncludes: {
      type: Array,
      value: function() {
        return ['https://cdn.rawgit.com/foretagsplatsen/numbro/develop/dist/numbro.min.js', 'https://cdn.rawgit.com/foretagsplatsen/numbro/develop/dist/languages.min.js'];
      }
    },
  },

  demoProps: {
    value: {
      type: Number,
      defaultValue: 1000,
      inputType: 'text'
    },

    format: {
      type: String,
      defaultValue: '0,0',
      inputType: 'text'
    },

    currency: {
      type: Boolean,
      defaultValue: false,
      inputType: 'toggle'
    },

    culture: {
      type: String,
      defaultValue: 'en-US',
      inputType: 'text'
    },

    zeroFormat: {
      type: String,
      defaultValue: 'N/A',
      inputType: 'text'
    }
  }
});
