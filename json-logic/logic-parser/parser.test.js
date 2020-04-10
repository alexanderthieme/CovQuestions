"use strict";
exports.__esModule = true;
var parser_1 = require("./parser");
var jsonLogic = require("json-logic-js");
var assert_1 = require("assert");
function equalAssert(statement, data, result) {
    var expr = new parser_1.Expression(statement).toJSONLogic();
    var res = jsonLogic.apply(expr, data);
    assert_1.equal(res, result, JSON.stringify(expr, null, 2) + ' --> ' + res + ' != ' + result);
}
// 
//	If then else
//
equalAssert("IF (question1.value > 5) THEN (question1.value + 100) ELSE 100", {}, 100);
equalAssert("IF (question1.value > 5) THEN (question1.value + 100) ELSE 100", {
    "question1": {
        "value": 6
    }
}, 106);
// 
//	Simple math
//
equalAssert("(question1.value:2 + 5.2) - (-question1.value:3 - 3)", {}, 13.2);
equalAssert("4 + 3.2 + 9 - 12", {}, 4.2);
equalAssert("(question1.value:2 + 5.2) - (-question1.value:3 - 3)", {
    "question1": {
        "value": 9
    }
}, (9 + 5.2) - (-9 - 3));
// array operations
equalAssert("+ [4.7, 5, question1.value:3.3]", {}, 13);
// array operations
equalAssert("* [2, 1, 1, question1.value:3.3]", {
    "question1": {
        "value": 9
    }
}, 18);
// Simple booleans
equalAssert("(question1.value >= 9) AND ((question1.value % 2) == 0)", {
    "question1": {
        "value": 9
    }
}, false);
equalAssert("(question1.value >= 9) AND ((question1.value % 2) == 0)", {
    "question1": {
        "value": 10
    }
}, true);
equalAssert("question1.value >= question2.value:4", {
    "question1": {
        "value": 7
    }
}, true);
equalAssert("question1.value >= question2.value:4", {
    "question1": {
        "value": 7
    },
    "question2": {
        "value": 9
    }
}, false);
equalAssert("question1.value in yoloqueen", {
    "question1": {
        "value": 'oqu'
    }
}, true);
// array operations
equalAssert("question1.value in [4,5,6,7,8,9]", {
    "question1": {
        "value": 2
    }
}, false);
equalAssert("question1.value in [4,5,6,7,8,9]", {
    "question1": {
        "value": 7
    }
}, true);
equalAssert("(question1.value in [90,0,'kp']) OR (question1.value < 0)", {
    "question1": {
        "value": -2
    }
}, true);
equalAssert("(question1.value in [90,0,kp]) OR (question1.value < 0)", {
    "question1": {
        "value": 'kp'
    }
}, true);
// min and max
equalAssert("max [(4.4 + 3),(question1.value:0 * 2)]", {}, 7.4);
// min and max
equalAssert("max [(4.4 + 3),(question1.value:0 * 2)]", {
    "question1": {
        "value": 8
    }
}, 16);
equalAssert("min [(4.4 + 3),(question1.value:0 * 2)]", {}, 0);
// min and max
equalAssert("min [(4.4 + 3),(question1.value:0 * 2)]", {
    "question1": {
        "value": 8
    }
}, 7.4);
equalAssert("max [(4 + 3),(IF (question1.value > 7) THEN (question1.value) ELSE (min [9, 19 ,20]))]", {
    "question1": {
        "value": 0
    }
}, 9);
// ranges
equalAssert("4 <= 20 <= 20", {}, true);
equalAssert("4 < 20 < 20", {}, false);
equalAssert("4 < (IF (question1.value > 7) THEN (question1.value) ELSE (max [21, 19 ,20])) < 20", {
    "question1": {
        "value": 0
    }
}, false);
equalAssert("4 < (IF (question1.value > 7) THEN (question1.value) ELSE (max [21, 19 ,20])) < 20", {
    "question1": {
        "value": 8
    }
}, true);
