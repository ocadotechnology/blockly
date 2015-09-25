/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Logic blocks for Blockly.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.Blocks.logic');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.logic.HUE = 210;

Blockly.Blocks['controls_if'] = {

  /**
 * Images for adding/removing elements
 */

  /**
   * Block for if/elseif/else condition.
   * @this Blockly.Block
   */
  init: function() {
    this.addPng = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAMAAAAMs7fIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Mzg5MzA1MkQwMjc5MTFFNUEyMEJEOEM2QTBCNDI2RjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Mzg5MzA1MkUwMjc5MTFFNUEyMEJEOEM2QTBCNDI2RjciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozODkzMDUyQjAyNzkxMUU1QTIwQkQ4QzZBMEI0MjZGNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozODkzMDUyQzAyNzkxMUU1QTIwQkQ4QzZBMEI0MjZGNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pptr84cAAACHUExURfPz/xoa/+/v//X1/xcX//v7//b2//Hx//z8/1NT//Dw/9jY/0RE/7u7/+np//T0/zs7/62t/wgI/yMj/w0N/x0d/y8v/19f/ykp//Ly/woK/93d/7S0/+zs/56e/xQU/+fn/9ra/yYm/6am//f3/xAQ/yAg/5qa//r6//7+/////wAA/////19oit8AAAAtdFJOU///////////////////////////////////////////////////////////AKXvC/0AAACcSURBVHjabNDZEoIwDAXQW8omyL65465N+P/vk1J06Iz3pcl56CTBoEOABGiqofso6SpRdUlERsJjyyZt6mmh9MHf1GcaJdjomoj0c90OoAMvhAuFYGXJ2kHWTK0Jc5MhLC0pQ0hhSX//8w8VltwUBjwX4vrjhGpf/2beXZTey4vdGdz4bXZX/ikXLPKXr+ZrjPdwpCcdmg70EWAAstQnpKfUzLwAAAAASUVORK5CYII=';
    this.subPng = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAMAAAAMs7fIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkU5MkMxMTAwMjc5MTFFNTgxRDJFMTA3OTA2NTkxNDEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkU5MkMxMTEwMjc5MTFFNTgxRDJFMTA3OTA2NTkxNDEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyRTkyQzEwRTAyNzkxMUU1ODFEMkUxMDc5MDY1OTE0MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyRTkyQzEwRjAyNzkxMUU1ODFEMkUxMDc5MDY1OTE0MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlxGqBwAAACHUExURfPz/xoa/+/v//X1/xcX//v7//b2//Hx//z8/1NT//Dw/9jY/0RE/7u7/+np//T0/zs7/62t/wgI/yMj/w0N/x0d/y8v/19f/ykp//Ly/woK/93d/7S0/+zs/56e/xQU/+fn/9ra/yYm/6am//f3/xAQ/yAg/5qa//r6//7+/////wAA/////19oit8AAAAtdFJOU///////////////////////////////////////////////////////////AKXvC/0AAACXSURBVHjabJDXDoMwDEVvCKtQ9ureKzb//31NoLRE6nmyjyzLvugNBEiAhhqmj5KuElWXRDSacN/ySJt6xlB654n6RNoEK/5xWfegHc8pFIKFZZYOsoaZJpibDGFpmTKEFJY53v7socIyV4Uej5lwfX2h2tZfsTkr85cXu9NE/Bp/V/4hFyzyp68+aeg8HOlJh4aA3gIMAL2WJ7aPWKm3AAAAAElFTkSuQmCC';
    if (!this.workspace.options.useMutators) {
      var addField = new Blockly.FieldClickImage(this.addPng, 17, 17,
                                          Blockly.Msg.CONTROLS_IF_ADD_TOOLTIP);
      addField.setChangeHandler(this.doAddField);
    }
    this.setHelpUrl(Blockly.Msg.CONTROLS_IF_HELPURL);
    this.setColour(Blockly.Blocks.logic.HUE);
    var valInput = this.appendValueInput('IF0')
        .setCheck('Boolean')
        .appendField(Blockly.Msg.CONTROLS_IF_MSG_IF);
    if (!this.workspace.options.useMutators) {
        valInput.appendField(addField,'IF_ADD');
    }
    this.appendStatementInput('DO0')
        .appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    if (this.workspace.options.useMutators) {
      this.setMutator(new Blockly.Mutator(['controls_if_elseif',
                                         'controls_if_else']));
    }
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      if (!thisBlock.elseifCount_ && !thisBlock.elseCount_) {
        return Blockly.Msg.CONTROLS_IF_TOOLTIP_1;
      } else if (!thisBlock.elseifCount_ && thisBlock.elseCount_) {
        return Blockly.Msg.CONTROLS_IF_TOOLTIP_2;
      } else if (thisBlock.elseifCount_ && !thisBlock.elseCount_) {
        return Blockly.Msg.CONTROLS_IF_TOOLTIP_3;
      } else if (thisBlock.elseifCount_ && thisBlock.elseCount_) {
        return Blockly.Msg.CONTROLS_IF_TOOLTIP_4;
      }
      return '';
    });
    this.elseifCount_ = 0;
    this.elseCount_ = 0;
  },
  /**
   * Create XML to represent the number of else-if and else inputs.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    if (!this.elseifCount_ && !this.elseCount_) {
      return null;
    }
    var container = document.createElement('mutation');
    if (this.elseifCount_) {
      container.setAttribute('elseif', this.elseifCount_);
    }
    if (this.elseCount_) {
      container.setAttribute('else', 1);
    }
    return container;
  },
  /**
   * Parse XML to restore the else-if and else inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    this.elseifCount_ = parseInt(xmlElement.getAttribute('elseif'), 10);
    this.elseCount_ = parseInt(xmlElement.getAttribute('else'), 10);
    this.updateAddSubShape();
  },
  /**
   * Add a section to the if
   * @param {!Blockly.FieldClickImage} field Field clicked on for the action
   */
  doAddField: function(field) {
    if (this.elseCount_) {
      // We already have an else so add another elseif
      this.elseifCount_++;
    } else {
      // No else, so add it
      this.elseCount_ = 1;
    }
  this.updateAddSubShape();
  },
  /**
   * remove a specific elseif section from an if
   * @param {!Blockly.FieldClickImage} field Field clicked on for the action
   */
  doRemoveElseifField: function(field) {
    // Determine what they clicked on
    var privateData = field.getPrivate();
    var pos = privateData.pos;
    // Removing one of the ELSIF clauses.
    var limit = this.elseifCount_+1;
    if(this.elseifCount_ > 0) {
      this.elseifCount_--;
    }
    // Disconnect anything plugged into the IF and DO part of this elseif
    var ifInput = this.getInput('IF'+pos);
    if (ifInput && ifInput.connection && ifInput.connection.targetConnection) {
      ifInput.connection.targetConnection.sourceBlock_.unplug(true,true);
    }
    var doInput = this.getInput('DO'+pos);
    if (doInput && doInput.connection && doInput.connection.targetConnection) {
      doInput.connection.targetConnection.sourceBlock_.unplug(true,true);
    }
    // Now we need to go through and move up all the lower ones to the previous
    // one.
    for(var slot = pos+1; slot < limit; slot++) {
      var nextIfInput = this.getInput('IF'+slot);
      var nextDoInput = this.getInput('DO'+slot);
      if (nextIfInput != null) {
        if (nextIfInput.connection && nextIfInput.connection.targetConnection) {
          var toMove = nextIfInput.connection.targetConnection;
          toMove.sourceBlock_.unplug(false,false);
          ifInput.connection.connect(toMove);
        }
      }
      if (nextDoInput != null) {
        if (nextDoInput.connection && nextDoInput.connection.targetConnection) {
          var toMove = nextDoInput.connection.targetConnection;
          toMove.sourceBlock_.unplug(false,false);
          doInput.connection.connect(toMove);
        }
      }
      ifInput = nextIfInput;
      doInput = nextDoInput;
    }
    this.updateAddSubShape();
  },
  /**
   * remove the else section from an if
   * @param {!Blockly.FieldClickImage} field Field clicked on for the action
   */
  doRemoveElseField: function(field) {
    // Removing the else, this is easy.
    this.elseCount_ = 0;
    this.updateAddSubShape();
  },
  /**
   * Reconfigure this block based on the component values.
   * @this Blockly.Block
   */
  updateAddSubShape: function() {
    // First get rid of anything which is beyond our count
    var pos = this.elseifCount_+1;
    while(this.getInput('IF'+pos) != null) {
      this.removeInput('IF'+pos);
      this.removeInput('DO'+pos);
      pos++;
    }
    if (!this.elseCount_) {
      if(this.getInput('ELSE') != null) {
        this.removeInput('ELSE');
      }
    }
    // Now add in the ones which we are missing.  Note that
    // we need to make sure that they get put AFTER the one of
    // the same number
    var inputIndex = this.getInputIndex('DO0');
    goog.asserts.assert(inputIndex != -1,
                        'Named input DO0 not found.');
    if (inputIndex !== -1) {
      inputIndex++;
      for(pos = 1; pos < this.elseifCount_+1;pos++,inputIndex+=2) {
        var inputItem = this.getInput('IF'+pos);
        if (inputItem == null) {
          var subField = null;
          if (!this.workspace.options.useMutators) {
            subField = new Blockly.FieldClickImage(this.subPng, 17, 17,
                                Blockly.Msg.CONTROLS_IF_ELSEIF_REMOVE_TOOLTIP);
            subField.setPrivate({name: 'IF', pos: pos});
            subField.setChangeHandler(this.doRemoveElseifField);
          }

          // We have to add an elseif clause
          var ifInput = this.appendValueInput('IF' + pos)
                            .setCheck('Boolean')
                            .appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSEIF);
          if (subField) {
            ifInput.appendField(subField);
          }
          var doInput = this.appendStatementInput('DO' + pos)
                            .appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
          // Now see if we need to move them in front of the else
          if(inputIndex < this.inputList.length-1) {
            // We move them from the bottom to the top.  Because they start at
            // the bottom, we move them to the same place and they will stay in
            // the same order.
            this.moveNumberedInputBefore(this.inputList.length-1, inputIndex);
            this.moveNumberedInputBefore(this.inputList.length-1, inputIndex);
          }
        }
      }
      // See if we need to add an else clause
      if (this.elseCount_) {
        var inputItem = this.getInput('ELSE');
        if (inputItem == null) {
          var subField = null;
          if (!this.workspace.options.useMutators) {
            subField = new Blockly.FieldClickImage(this.subPng, 17, 17,
                                Blockly.Msg.CONTROLS_IF_ELSE_REMOVE_TOOLTIP);
            subField.setChangeHandler(this.doRemoveElseField);
          }

          var doElse = this.appendStatementInput('ELSE')
              .appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE);
          if (subField) {
            doElse.appendField(subField);
          }
        }
      }
    }
    //
    // Make sure that we don't have anything which might be showing up
    // as a false connection
    //
    if (this.rendered) {
      this.render();
      this.bumpNeighbours_();
      this.workspace.fireChangeEvent();
    }
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
  decompose: function(workspace) {
    var containerBlock = Blockly.Block.obtain(workspace, 'controls_if_if');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 1; i <= this.elseifCount_; i++) {
      var elseifBlock = Blockly.Block.obtain(workspace, 'controls_if_elseif');
      elseifBlock.initSvg();
      connection.connect(elseifBlock.previousConnection);
      connection = elseifBlock.nextConnection;
    }
    if (this.elseCount_) {
      var elseBlock = Blockly.Block.obtain(workspace, 'controls_if_else');
      elseBlock.initSvg();
      connection.connect(elseBlock.previousConnection);
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  compose: function(containerBlock) {
    // Disconnect the else input blocks and remove the inputs.
    if (this.elseCount_) {
      this.removeInput('ELSE');
    }
    this.elseCount_ = 0;
    // Disconnect all the elseif input blocks and remove the inputs.
    for (var i = this.elseifCount_; i > 0; i--) {
      this.removeInput('IF' + i);
      this.removeInput('DO' + i);
    }
    this.elseifCount_ = 0;
    // Rebuild the block's optional inputs.
    var clauseBlock = containerBlock.getInputTargetBlock('STACK');
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'controls_if_elseif':
          this.elseifCount_++;
          var ifInput = this.appendValueInput('IF' + this.elseifCount_)
              .setCheck('Boolean')
              .appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSEIF);
          var doInput = this.appendStatementInput('DO' + this.elseifCount_);
          doInput.appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
          // Reconnect any child blocks.
          if (clauseBlock.valueConnection_) {
            ifInput.connection.connect(clauseBlock.valueConnection_);
          }
          if (clauseBlock.statementConnection_) {
            doInput.connection.connect(clauseBlock.statementConnection_);
          }
          break;
        case 'controls_if_else':
          this.elseCount_++;
          var elseInput = this.appendStatementInput('ELSE');
          elseInput.appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE);
          // Reconnect any child blocks.
          if (clauseBlock.statementConnection_) {
            elseInput.connection.connect(clauseBlock.statementConnection_);
          }
          break;
        default:
          throw 'Unknown block type.';
      }
      clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
    }
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  saveConnections: function(containerBlock) {
    var clauseBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 1;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'controls_if_elseif':
          var inputIf = this.getInput('IF' + i);
          var inputDo = this.getInput('DO' + i);
          clauseBlock.valueConnection_ =
              inputIf && inputIf.connection.targetConnection;
          clauseBlock.statementConnection_ =
              inputDo && inputDo.connection.targetConnection;
          i++;
          break;
        case 'controls_if_else':
          var inputDo = this.getInput('ELSE');
          clauseBlock.statementConnection_ =
              inputDo && inputDo.connection.targetConnection;
          break;
        default:
          throw 'Unknown block type.';
      }
      clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
    }
  }
};

Blockly.Blocks['controls_if_if'] = {
  /**
   * Mutator block for if container.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.logic.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.CONTROLS_IF_IF_TITLE_IF);
    this.appendStatementInput('STACK');
    this.setTooltip(Blockly.Msg.CONTROLS_IF_IF_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['controls_if_elseif'] = {
  /**
   * Mutator bolck for else-if condition.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.logic.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.CONTROLS_IF_ELSEIF_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['controls_if_else'] = {
  /**
   * Mutator block for else condition.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.logic.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.CONTROLS_IF_ELSE_TITLE_ELSE);
    this.setPreviousStatement(true);
    this.setTooltip(Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['logic_compare'] = {
  /**
   * Block for comparison operator.
   * @this Blockly.Block
   */
  init: function() {
    var OPERATORS = this.RTL ? [
          ['=', 'EQ'],
          ['\u2260', 'NEQ'],
          ['>', 'LT'],
          ['\u2265', 'LTE'],
          ['<', 'GT'],
          ['\u2264', 'GTE']
        ] : [
          ['=', 'EQ'],
          ['\u2260', 'NEQ'],
          ['<', 'LT'],
          ['\u2264', 'LTE'],
          ['>', 'GT'],
          ['\u2265', 'GTE']
        ];
    this.setHelpUrl(Blockly.Msg.LOGIC_COMPARE_HELPURL);
    this.setColour(Blockly.Blocks.logic.HUE);
    this.setOutput(true, 'Boolean');
    this.appendValueInput('A');
    this.appendValueInput('B')
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var op = thisBlock.getFieldValue('OP');
      var TOOLTIPS = {
        'EQ': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ,
        'NEQ': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ,
        'LT': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT,
        'LTE': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE,
        'GT': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT,
        'GTE': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE
      };
      return TOOLTIPS[op];
    });
    this.prevBlocks_ = [null, null];
  },
  /**
   * Called whenever anything on the workspace changes.
   * Prevent mismatched types from being compared.
   * @this Blockly.Block
   */
  onchange: function() {
    var blockA = this.getInputTargetBlock('A');
    var blockB = this.getInputTargetBlock('B');
    // Disconnect blocks that existed prior to this change if they don't match.
    if (blockA && blockB &&
        !blockA.outputConnection.checkType_(blockB.outputConnection)) {
      // Mismatch between two inputs.  Disconnect previous and bump it away.
      for (var i = 0; i < this.prevBlocks_.length; i++) {
        var block = this.prevBlocks_[i];
        if (block === blockA || block === blockB) {
          block.setParent(null);
          block.bumpNeighbours_();
        }
      }
    }
    this.prevBlocks_[0] = blockA;
    this.prevBlocks_[1] = blockB;
  }
};

Blockly.Blocks['logic_operation'] = {
  /**
   * Block for logical operations: 'and', 'or'.
   * @this Blockly.Block
   */
  init: function() {
    var OPERATORS =
        [[Blockly.Msg.LOGIC_OPERATION_AND, 'AND'],
         [Blockly.Msg.LOGIC_OPERATION_OR, 'OR']];
    this.setHelpUrl(Blockly.Msg.LOGIC_OPERATION_HELPURL);
    this.setColour(Blockly.Blocks.logic.HUE);
    this.setOutput(true, 'Boolean');
    this.appendValueInput('A')
        .setCheck('Boolean');
    this.appendValueInput('B')
        .setCheck('Boolean')
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var op = thisBlock.getFieldValue('OP');
      var TOOLTIPS = {
        'AND': Blockly.Msg.LOGIC_OPERATION_TOOLTIP_AND,
        'OR': Blockly.Msg.LOGIC_OPERATION_TOOLTIP_OR
      };
      return TOOLTIPS[op];
    });
  }
};

Blockly.Blocks['logic_negate'] = {
  /**
   * Block for negation.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOGIC_NEGATE_TITLE,
      "args0": [
        {
          "type": "input_value",
          "name": "BOOL",
          "check": "Boolean"
        }
      ],
      "output": "Boolean",
      "colour": Blockly.Blocks.logic.HUE,
      "tooltip": Blockly.Msg.LOGIC_NEGATE_TOOLTIP,
      "helpUrl": Blockly.Msg.LOGIC_NEGATE_HELPURL
    });
  }
};

Blockly.Blocks['logic_boolean'] = {
  /**
   * Block for boolean data type: true and false.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "BOOL",
          "options": [
            [Blockly.Msg.LOGIC_BOOLEAN_TRUE, "TRUE"],
            [Blockly.Msg.LOGIC_BOOLEAN_FALSE, "FALSE"]
          ]
        }
      ],
      "output": "Boolean",
      "colour": Blockly.Blocks.logic.HUE,
      "tooltip": Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP,
      "helpUrl": Blockly.Msg.LOGIC_BOOLEAN_HELPURL
    });
  }
};

Blockly.Blocks['logic_null'] = {
  /**
   * Block for null data type.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOGIC_NULL,
      "output": null,
      "colour": Blockly.Blocks.logic.HUE,
      "tooltip": Blockly.Msg.LOGIC_NULL_TOOLTIP,
      "helpUrl": Blockly.Msg.LOGIC_NULL_HELPURL
    });
  }
};

Blockly.Blocks['logic_ternary'] = {
  /**
   * Block for ternary operator.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.LOGIC_TERNARY_HELPURL);
    this.setColour(Blockly.Blocks.logic.HUE);
    this.appendValueInput('IF')
        .setCheck('Boolean')
        .appendField(Blockly.Msg.LOGIC_TERNARY_CONDITION);
    this.appendValueInput('THEN')
        .appendField(Blockly.Msg.LOGIC_TERNARY_IF_TRUE);
    this.appendValueInput('ELSE')
        .appendField(Blockly.Msg.LOGIC_TERNARY_IF_FALSE);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.LOGIC_TERNARY_TOOLTIP);
    this.prevParentConnection_ = null;
  },
  /**
   * Called whenever anything on the workspace changes.
   * Prevent mismatched types.
   * @this Blockly.Block
   */
  onchange: function() {
    var blockA = this.getInputTargetBlock('THEN');
    var blockB = this.getInputTargetBlock('ELSE');
    var parentConnection = this.outputConnection.targetConnection;
    // Disconnect blocks that existed prior to this change if they don't match.
    if ((blockA || blockB) && parentConnection) {
      for (var i = 0; i < 2; i++) {
        var block = (i == 1) ? blockA : blockB;
        if (block && !block.outputConnection.checkType_(parentConnection)) {
          if (parentConnection === this.prevParentConnection_) {
            this.setParent(null);
            parentConnection.sourceBlock_.bumpNeighbours_();
          } else {
            block.setParent(null);
            block.bumpNeighbours_();
          }
        }
      }
    }
    this.prevParentConnection_ = parentConnection;
  }
};
