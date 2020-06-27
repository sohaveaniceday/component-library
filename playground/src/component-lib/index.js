/* eslint-disable */
import React__default, { createContext, useReducer, useContext, useState, useEffect, useRef, createElement } from 'react';
import axios from 'axios';
import { Slider as Slider$1, Rail, Handles, Tracks, Ticks } from 'react-compound-slider';
import { CSSTransition as CSSTransition$1 } from 'react-transition-group';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

styleInject(css_248z);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var isSingleProperty = function (option) {
    return typeof option === 'string';
};
var isTernaryProperty = function (option) {
    return typeof option !== 'string' && option.length === 3;
};
var assertNoSpaces = function (className) {
    if (className.includes(' ')) {
        console.warn("Classname option " + className + " should be split into an array as it contains multiple items");
    }
};
var assertMultipleItems = function (classNames) {
    if (classNames.length === 1) {
        console.warn("Classname option " + classNames[0] + " should be a string as it only contains one item");
    }
};
var addSingleProperty = function (option, classNamesObj) {
    var _a;
    assertNoSpaces(option);
    return __assign(__assign({}, classNamesObj), (_a = {}, _a[option] = true, _a));
};
var addAllProperties = function (properties, classNamesObj) {
    assertMultipleItems(properties);
    return __assign(__assign({}, classNamesObj), properties.reduce(function (innerAcc, className) { return addSingleProperty(className, innerAcc); }, {}));
};
var buildClassNameObj = function (properties) {
    return properties.reduce(function (classNamesObj, property) {
        if (isSingleProperty(property))
            return addSingleProperty(property, classNamesObj);
        if (isTernaryProperty(property)) {
            var condition_1 = property[0], classNamesIfTrue = property[1], classNamesIfFalse = property[2];
            var classNames_1 = condition_1 ? classNamesIfTrue : classNamesIfFalse;
            return Array.isArray(classNames_1)
                ? addAllProperties(classNames_1, classNamesObj)
                : addSingleProperty(classNames_1, classNamesObj);
        }
        // isConditionalOption
        var condition = property[0], classNames = property[1];
        if (condition) {
            return Array.isArray(classNames)
                ? addAllProperties(classNames, classNamesObj)
                : addSingleProperty(classNames, classNamesObj);
        }
        // nothing will be added, but still check format of input
        if (Array.isArray(classNames)) {
            assertMultipleItems(classNames);
        }
        else {
            assertNoSpaces(classNames);
        }
        return classNamesObj;
    }, {});
};
var buildClassNameString = function (classNamesObj) {
    return Object.entries(classNamesObj).reduce(function (classNameString, _a) {
        var key = _a[0], value = _a[1];
        return value
            ? classNameString
                ? classNameString + ' ' + key
                : classNameString + key
            : classNameString;
    }, '');
};
var getClassName = function (properties) {
    var obj = buildClassNameObj(properties);
    return buildClassNameString(obj);
};

var TextInput = function (_a) {
    var name = _a.name, _b = _a.cssClasses, cssClasses = _b === void 0 ? [] : _b, value = _a.value, onChange = _a.onChange, onKeyDown = _a.onKeyDown, onBlur = _a.onBlur, onFocus = _a.onFocus, autoFocus = _a.autoFocus, _c = _a.rounded, rounded = _c === void 0 ? false : _c, _d = _a.roundedTop, roundedTop = _d === void 0 ? true : _d, _e = _a.disabled, disabled = _e === void 0 ? false : _e, _f = _a.border, border = _f === void 0 ? true : _f, forwardRef = _a.forwardRef, _g = _a.type, type = _g === void 0 ? 'text' : _g, TextInputProps = __rest(_a, ["name", "cssClasses", "value", "onChange", "onKeyDown", "onBlur", "onFocus", "autoFocus", "rounded", "roundedTop", "disabled", "border", "forwardRef", "type"]);
    var inputClassName = getClassName(__spreadArrays(cssClasses, [
        [
            disabled,
            ['bg-gray-300', 'pointer-events-none'],
            ['outline-none', 'bg-gray-100'],
        ],
        [rounded, 'rounded-full'],
        [roundedTop, 'rounded-t-full'],
        [border && !roundedTop, 'border-4'],
        [border && roundedTop, ['border-t-4', 'border-l-4', 'border-r-4']],
        'text-gray-600',
        'w-full',
        'px-4',
        'py-2',
        'leading-tight',
        'rounded',
        'appearance-none',
    ]));
    return (React__default.createElement("div", { className: getClassName([[disabled, 'cursor-not-allowed'], 'w-full']) },
        React__default.createElement("input", __assign({ ref: forwardRef, className: inputClassName, type: type, name: name, value: value, onChange: onChange, onKeyDown: onKeyDown, onBlur: onBlur, onFocus: onFocus, autoFocus: autoFocus }, TextInputProps))));
};

var recursivelyUpdateFields = function (parent, _a) {
    var _b;
    var key = _a[0], value = _a[1];
    var field = parent ? parent[key] : null;
    var isValueObject = value
        ? typeof value === 'object' && value.constructor === Object
        : false;
    return __assign(__assign({}, parent), (_b = {}, _b[key] = isValueObject
        ? __assign(__assign({}, field), Object.entries(value).reduce(recursivelyUpdateFields, field)) : value, _b));
};
var applyUpdate = function (update, prevState) {
    return Object.entries(update).reduce(recursivelyUpdateFields, prevState);
};
var updateObjectStateReducer = function (prevState, update) {
    return typeof update === 'function'
        ? update(prevState)
        : applyUpdate(update, prevState);
};

var StateContext = createContext({});
var ObjectStateProvider = function (_a) {
    var initialState = _a.initialState, children = _a.children;
    return (React__default.createElement(StateContext.Provider, { value: useReducer(updateObjectStateReducer, initialState) }, children));
};
var useServiceState = function () { return useContext(StateContext); };

var useObjectState = function (initialState) {
    return useReducer(updateObjectStateReducer, initialState);
};

var useFetch = function () {
    var _a = useState(null), data = _a[0], setData = _a[1];
    var _b = useState(['', {}]), request = _b[0], setRequest = _b[1];
    var _c = useState(false), isLoading = _c[0], setIsLoading = _c[1];
    var _d = useState(null), error = _d[0], setError = _d[1];
    useEffect(function () {
        var url = request[0], config = request[1];
        var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
            var result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setIsLoading(true);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, axios(url, config)];
                    case 2:
                        result = _a.sent();
                        setData(result.data);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        setError(error_1);
                        return [3 /*break*/, 4];
                    case 4:
                        setIsLoading(false);
                        return [2 /*return*/];
                }
            });
        }); };
        if (url)
            fetchData();
    }, [request]);
    var clearData = function () { return setData(null); };
    return { data: data, isLoading: isLoading, error: error, setRequest: setRequest, clearData: clearData };
};

var useCustomForm = function (_a) {
    var initialValues = _a.initialValues, onSubmit = _a.onSubmit, initialInput = _a.initialInput;
    var _b = useState(initialValues || {}), values = _b[0], setValues = _b[1];
    var _c = useState({}), errors = _c[0], setErrors = _c[1];
    var _d = useState({}), touched = _d[0], setTouched = _d[1];
    // const [onSubmitting, setOnSubmitting] = useState<boolean>(false)
    // const [onBlur, setOnBlur] = useState<boolean>(false)
    var _e = useState(undefined), currentValue = _e[0], setCurrentValue = _e[1];
    var _f = useState(initialInput), currentInput = _f[0], setCurrentInput = _f[1];
    var handleChange = function (value, name) {
        var _a;
        setValues(__assign(__assign({}, values), (_a = {}, _a[name] = value, _a)));
        setCurrentValue(value);
    };
    var handleFocus = function (_a) {
        var target = _a.target;
        var name = target.name;
        setCurrentInput(name);
    };
    var handleBlur = function (event) {
        var _a;
        var target = event.target;
        var name = target.name;
        setTouched(__assign(__assign({}, touched), (_a = {}, _a[name] = true, _a)));
        setErrors(__assign({}, errors));
        setCurrentValue(undefined);
        setCurrentInput(undefined);
    };
    var handleSubmit = function (event) {
        if (onSubmit) {
            if (event)
                event.preventDefault();
            setErrors(__assign({}, errors));
            setCurrentValue(undefined);
            setCurrentInput(undefined);
            onSubmit({ values: values, errors: errors });
        }
    };
    var clearValues = function () {
        setValues(initialValues || {});
    };
    return {
        clearValues: clearValues,
        values: values,
        errors: errors,
        touched: touched,
        handleChange: handleChange,
        handleBlur: handleBlur,
        handleFocus: handleFocus,
        handleSubmit: handleSubmit,
        currentValue: currentValue,
        currentInput: currentInput,
    };
};

// Our hook
var useDebounce = function (value, delay) {
    // State and setters for debounced value
    var _a = useState(value), debouncedValue = _a[0], setDebouncedValue = _a[1];
    useEffect(function () {
        // Set debouncedValue to value (passed in) after the specified delay
        var handler = setTimeout(function () {
            setDebouncedValue(value);
        }, delay);
        // Return a cleanup function that will be called every time ...
        // ... useEffect is re-called. useEffect will only be re-called ...
        // ... if value changes (see the inputs array below).
        // This is how we prevent debouncedValue from changing if value is ...
        // ... changed within the delay period. Timeout gets cleared and restarted.
        // To put it in context, if the user is typing within our app's ...
        // ... search box, we don't want the debouncedValue to update until ...
        // ... they've stopped typing for more than 500ms.
        return function () {
            clearTimeout(handler);
        };
    }, 
    // Only re-call effect if value changes
    // You could also add the "delay" var to inputs array if you ...
    // ... need to be able to change that dynamically.
    [value, delay]);
    return debouncedValue;
};

var useEventListener = function (eventName, handler, element) {
    if (element === void 0) { element = document; }
    // Create a ref that stores handler
    var savedHandler = useRef(null);
    // Update ref.current value if handler changes.
    // This allows our effect below to always get latest handler
    // without us needing to pass it in effect deps array
    // and potentially cause effect to re-run every render.
    useEffect(function () {
        savedHandler.current = handler;
    }, [handler]);
    useEffect(function () {
        // Make sure element supports addEventListener
        var isSupported = element.addEventListener;
        if (!isSupported)
            return;
        // // Create event listener that calls handler function stored in ref
        var eventListener = function (event) {
            return savedHandler.current && savedHandler.current(event);
        };
        // Add event listener
        element.addEventListener(eventName, eventListener);
        // Remove event listener on cleanup
        return function () {
            element.removeEventListener(eventName, eventListener);
        };
    }, [eventName, element] // Re-run if eventName or element changes
    );
};

var AutoSuggest = function (_a) {
    var _b = _a.suggestions, suggestions = _b === void 0 ? [] : _b, name = _a.name, onChangeFunc = _a.onChangeFunc, autoFocus = _a.autoFocus, onFocus = _a.onFocus, onBlur = _a.onBlur, disabled = _a.disabled, forwardRef = _a.forwardRef, placeholder = _a.placeholder, _c = _a.rounded, rounded = _c === void 0 ? false : _c, _d = _a.cssClasses, cssClasses = _d === void 0 ? [] : _d, _e = _a.border, border = _e === void 0 ? false : _e, borderColor = _a.borderColor, inputValue = _a.value;
    var initialAutoSuggestState = {
        // The active selection's index
        activeSuggestion: 0,
        // The suggestions that match the user's input
        filteredSuggestions: [],
        // Whether or not the suggestion list is shown
        showSuggestions: false,
    };
    var _f = useObjectState(initialAutoSuggestState), _g = _f[0], showSuggestions = _g.showSuggestions, activeSuggestion = _g.activeSuggestion, filteredSuggestions = _g.filteredSuggestions, updateAutoSuggestState = _f[1];
    var isDisplayingSuggestions = showSuggestions &&
        filteredSuggestions.length > 0 &&
        !!inputValue &&
        !disabled;
    useEffect(function () {
        if (!disabled) {
            // Filter our suggestions that don't contain the user's input
            var newFilteredSuggestions = suggestions.reduce(function (acc, current) {
                var name = current.name;
                return name.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
                    ? __spreadArrays(acc, [current]) : acc;
            }, []);
            // Update the user input and filtered suggestions, reset the active
            // suggestion and make sure the suggestions are shown
            updateAutoSuggestState({
                activeSuggestion: 0,
                filteredSuggestions: newFilteredSuggestions,
                showSuggestions: true,
            });
        }
    }, [disabled, inputValue, suggestions, updateAutoSuggestState]);
    useEffect(function () {
        if (isDisplayingSuggestions && suggestions.length < 1) {
            updateAutoSuggestState(initialAutoSuggestState);
        }
    }, [
        initialAutoSuggestState,
        suggestions.length,
        updateAutoSuggestState,
        isDisplayingSuggestions,
    ]);
    // Event fired when the input value is changed
    var onChange = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, value, name_1;
        return __generator(this, function (_b) {
            if (onChangeFunc) {
                event.persist();
                _a = event.target, value = _a.value, name_1 = _a.name;
                onChangeFunc(value, name_1);
            }
            return [2 /*return*/];
        });
    }); };
    // Event fired when the user clicks on a suggestion
    var onClick = function (_a) {
        var currentTarget = _a.currentTarget;
        // Update the user input and reset the rest of the state
        var dataset = currentTarget.dataset;
        onChangeFunc && onChangeFunc(dataset.name, name, dataset.id);
        updateAutoSuggestState(initialAutoSuggestState);
    };
    // Event fired when the user presses a key down
    var onKeyDown = function (event) {
        var selectedItem = filteredSuggestions[activeSuggestion];
        if (!isDisplayingSuggestions || !selectedItem)
            return;
        // Stops document's keydown event listener when displaying a list
        event.stopPropagation();
        // User pressed the enter key, update the input and close the
        // suggestions
        if (event.keyCode === 13) {
            event.preventDefault();
            if (selectedItem.disabled)
                return;
            onChangeFunc && onChangeFunc(selectedItem.name, name, selectedItem.id);
            updateAutoSuggestState(initialAutoSuggestState);
        }
        // User pressed the up arrow, decrement the index
        else if (event.keyCode === 38) {
            if (activeSuggestion === 0)
                return;
            updateAutoSuggestState({ activeSuggestion: activeSuggestion - 1 });
        }
        // User pressed the down arrow, increment the index
        else if (event.keyCode === 40) {
            if (activeSuggestion - 1 === filteredSuggestions.length)
                return;
            updateAutoSuggestState({
                activeSuggestion: Math.min(activeSuggestion + 1, filteredSuggestions.length - 1),
            });
            // User pressed escape, exit list
        }
        else if (event.keyCode === 27) {
            updateAutoSuggestState(initialAutoSuggestState);
        }
    };
    //TO DO - reimplement automatic scrolling for desktop
    // useEffect(() => {
    //   if (isDisplayingSuggestions) {
    //     const activeSuggestionId = filteredSuggestions[activeSuggestion].id
    //     document.getElementById(activeSuggestionId)?.scrollIntoView({
    //       behavior: 'smooth',
    //     })
    //   }
    // }, [activeSuggestion, filteredSuggestions, isDisplayingSuggestions])
    var suggestionsListComponent = isDisplayingSuggestions ? (React__default.createElement("div", { className: 'absolute z-20 w-full h-64' },
        React__default.createElement("ul", { className: getClassName([
                'max-h-full',
                'overflow-y-scroll',
                'text-left',
                'bg-white',
                [rounded, 'rounded-b-lg'],
                [border, ['border-l-4', 'border-r-4', 'border-b-4']],
            ]), style: { borderColor: borderColor } }, filteredSuggestions.map(function (_a, index) {
            var name = _a.name, element = _a.element, id = _a.id, _b = _a.disabled, suggestionDisabled = _b === void 0 ? false : _b;
            // const isActiveSuggestion = activeSuggestion === index
            return (React__default.createElement("li", { id: id, "data-id": id, "data-name": name, className: getClassName([
                    // TO DO: restablish with desktop version
                    // [
                    //   isActiveSuggestion && !suggestionDisabled,
                    //   ['bg-blue-300', 'text-white'],
                    // ],
                    // [isActiveSuggestion && suggestionDisabled, 'bg-gray-500'],
                    [
                        suggestionDisabled,
                        [
                            'cursor-none',
                            'pointer-events-none',
                            'bg-gray-300',
                            'text-white',
                        ],
                        'cursor-pointer',
                    ],
                    'border-t-2',
                ]), style: { borderColor: borderColor }, key: name + "-" + index, onClick: suggestionDisabled ? undefined : onClick }, element));
        })))) : (React__default.createElement(React__default.Fragment, null));
    var autoSuggestClassName = getClassName(__spreadArrays(cssClasses));
    return (React__default.createElement("div", { className: autoSuggestClassName },
        React__default.createElement("div", { className: 'relative' },
            React__default.createElement("div", { className: 'inline-flex w-full' },
                React__default.createElement(TextInput, { name: name, onChange: onChange, value: inputValue, onKeyDown: onKeyDown, onBlur: onBlur, autoFocus: autoFocus, onFocus: onFocus, disabled: disabled, forwardRef: forwardRef, placeholder: placeholder, rounded: rounded && !isDisplayingSuggestions, roundedTop: rounded && isDisplayingSuggestions, border: border, style: { borderColor: borderColor } })),
            suggestionsListComponent)));
};

var css_248z$1 = "@-webkit-keyframes shimmer {\n  0% {\n    background-position: -1000px 0;\n  }\n\n  100% {\n    background-position: 1000px 0;\n  }\n}\n\n@keyframes shimmer {\n  0% {\n    background-position: -1000px 0;\n  }\n\n  100% {\n    background-position: 1000px 0;\n  }\n}\n\n.shimmer-animation {\n  -webkit-animation: shimmer 3s linear infinite;\n          animation: shimmer 3s linear infinite;\n  background: linear-gradient(90deg, #ddd 4%, #eee 10%, #ddd 20%);\n  background-size: 1000px 100%;\n}\n";
styleInject(css_248z$1);

var Skeleton = function (_a) {
    var _b = _a.shape, shape = _b === void 0 ? 'square' : _b, text = _a.text, size = _a.size, _c = _a.cssClasses, cssClasses = _c === void 0 ? [] : _c, children = _a.children, override = _a.override, _d = _a.animation, animation = _d === void 0 ? true : _d, skeletonProps = __rest(_a, ["shape", "text", "size", "cssClasses", "children", "override", "animation"]);
    var animationClass = animation ? ['shimmer-animation'] : ['bg-gray-300'];
    if (children || override)
        return (React__default.createElement("div", __assign({ className: getClassName(__spreadArrays(cssClasses, animationClass)) }, skeletonProps), children));
    var translateHeightOrWidthClassNameValue = function (sizeString, multiplier) {
        if (multiplier === void 0) { multiplier = 1; }
        var translateString = function (size) {
            switch (size) {
                case 'xs':
                    return 1.5;
                case 'sm':
                    return 2;
                case 'md':
                    return 2.5;
                case 'lg':
                    return 3;
                case 'xl':
                    return 3.5;
                case '2xl':
                    return 4;
                default:
                    return 0;
            }
        };
        return translateString(sizeString) * multiplier;
    };
    var getShapeSizeClassNames = function (size) {
        var shapeSizeClassNameValue = typeof size === 'number'
            ? size
            : translateHeightOrWidthClassNameValue(size, 16);
        return ["h-" + shapeSizeClassNameValue, "w-" + shapeSizeClassNameValue];
    };
    var createShapeClassNames = function (shape) {
        var isCircleShape = shape === 'circle';
        var isRoundedShape = shape === 'rounded';
        var shapeTypeClassName = isCircleShape || isRoundedShape
            ? ["rounded-" + (isCircleShape ? 'full' : 'md')]
            : [];
        return __spreadArrays(getShapeSizeClassNames(size), shapeTypeClassName);
    };
    var createTextClassNames = function (_a) {
        var length = _a.length, _b = _a.rounded, rounded = _b === void 0 ? true : _b;
        var textHeightClassNameValue = typeof size === 'number'
            ? size
            : translateHeightOrWidthClassNameValue(size);
        return [
            "h-" + textHeightClassNameValue,
            "w-" + length,
            [rounded, 'rounded-lg'],
        ];
    };
    var conditionalElementClassName = text
        ? createTextClassNames(text)
        : shape
            ? createShapeClassNames(shape)
            : [];
    var elementClassName = getClassName(__spreadArrays(conditionalElementClassName, cssClasses, animationClass));
    var shapeWrapperClassName = getClassName(getShapeSizeClassNames(size));
    var ElementComponent = function () { return (React__default.createElement("div", __assign({ className: elementClassName }, skeletonProps))); };
    return text ? (React__default.createElement(ElementComponent, null)) : (React__default.createElement("div", { className: shapeWrapperClassName },
        React__default.createElement(ElementComponent, null)));
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _ref = /*#__PURE__*/createElement("path", {
  fill: "currentColor",
  d: "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"
});

function SvgTick(props) {
  return /*#__PURE__*/createElement("svg", _extends({
    "aria-hidden": "true",
    "data-prefix": "far",
    "data-icon": "check-circle",
    className: "tick_svg__svg-inline--fa tick_svg__fa-check-circle tick_svg__fa-w-16",
    viewBox: "0 0 512 512"
  }, props), _ref);
}

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

var _ref$1 = /*#__PURE__*/createElement("path", {
  fill: "currentColor",
  d: "M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"
});

function SvgEdit(props) {
  return /*#__PURE__*/createElement("svg", _extends$1({
    "aria-hidden": "true",
    "data-prefix": "fas",
    "data-icon": "edit",
    className: "edit_svg__svg-inline--fa edit_svg__fa-edit edit_svg__fa-w-18",
    viewBox: "0 0 576 512"
  }, props), _ref$1);
}

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

var _ref$2 = /*#__PURE__*/createElement("path", {
  fill: "currentColor",
  d: "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
});

function SvgChevron(props) {
  return /*#__PURE__*/createElement("svg", _extends$2({
    "aria-hidden": "true",
    "data-prefix": "fas",
    "data-icon": "chevron-right",
    className: "chevron_svg__svg-inline--fa chevron_svg__fa-chevron-right chevron_svg__fa-w-10",
    viewBox: "0 0 320 512"
  }, props), _ref$2);
}

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

var _ref$3 = /*#__PURE__*/createElement("path", {
  fill: "currentColor",
  d: "M128 160h320v192H128V160zm400 96c0 26.51 21.49 48 48 48v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96c26.51 0 48-21.49 48-48s-21.49-48-48-48v-96c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48v96c-26.51 0-48 21.49-48 48zm-48-104c0-13.255-10.745-24-24-24H120c-13.255 0-24 10.745-24 24v208c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V152z"
});

function SvgMovie(props) {
  return /*#__PURE__*/createElement("svg", _extends$3({
    "aria-hidden": "true",
    "data-prefix": "fas",
    "data-icon": "ticket-alt",
    className: "movie_svg__svg-inline--fa movie_svg__fa-ticket-alt movie_svg__fa-w-18",
    viewBox: "0 0 576 512"
  }, props), _ref$3);
}

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

var _ref$4 = /*#__PURE__*/createElement("path", {
  fill: "currentColor",
  d: "M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"
});

function SvgThumb(props) {
  return /*#__PURE__*/createElement("svg", _extends$4({
    "aria-hidden": "true",
    "data-prefix": "fas",
    "data-icon": "thumbs-up",
    className: "thumb_svg__svg-inline--fa thumb_svg__fa-thumbs-up thumb_svg__fa-w-16",
    viewBox: "0 0 512 512"
  }, props), _ref$4);
}

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

var _ref$5 = /*#__PURE__*/createElement("path", {
  fill: "currentColor",
  d: "M377.941 169.941V216H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.568 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296h243.882v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.568 0-33.941l-86.059-86.059c-15.119-15.12-40.971-4.412-40.971 16.97z"
});

function SvgArrows(props) {
  return /*#__PURE__*/createElement("svg", _extends$5({
    "aria-hidden": "true",
    "data-prefix": "fas",
    "data-icon": "arrows-alt-h",
    className: "arrows_svg__svg-inline--fa arrows_svg__fa-arrows-alt-h arrows_svg__fa-w-16",
    viewBox: "0 0 512 512"
  }, props), _ref$5);
}

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }

var _ref$6 = /*#__PURE__*/createElement("path", {
  fill: "currentColor",
  d: "M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
});

function SvgArrow(props) {
  return /*#__PURE__*/createElement("svg", _extends$6({
    "aria-hidden": "true",
    "data-prefix": "fas",
    "data-icon": "arrow-left",
    className: "arrow_svg__svg-inline--fa arrow_svg__fa-arrow-left arrow_svg__fa-w-14",
    viewBox: "0 0 448 512"
  }, props), _ref$6);
}

var svgMap = {
    tick: SvgTick,
    edit: SvgEdit,
    chevron: SvgChevron,
    movie: SvgMovie,
    thumb: SvgThumb,
    arrows: SvgArrows,
    arrow: SvgArrow,
};
var Icon = function (_a) {
    var iconName = _a.iconName, _b = _a.cssClasses, cssClasses = _b === void 0 ? [] : _b, svgProps = __rest(_a, ["iconName", "cssClasses"]);
    var iconClass = getClassName(__spreadArrays(cssClasses));
    var SVG = svgMap[iconName];
    return React__default.createElement(SVG, __assign({ className: iconClass }, svgProps));
};

var Accordion = function (_a) {
    var title = _a.title, content = _a.content, active = _a.active, onClick = _a.onClick, _b = _a.horizontal, horizontal = _b === void 0 ? false : _b, backgroundColor = _a.backgroundColor, backgroundImage = _a.backgroundImage, borderColor = _a.borderColor, textColor = _a.textColor;
    var wrapperActiveClass = horizontal
        ? ['w-full']
        : ['flex-1', 'overflow-y-scroll'];
    var contentActiveClass = horizontal
        ? ['w-full', 'flex-1', 'border-r-4']
        : ['h-full'];
    var contentInactiveClass = horizontal ? ['w-0'] : ['h-0'];
    return (React__default.createElement("div", { className: getClassName([
            'flex',
            [!horizontal, 'flex-col'],
            [active, __spreadArrays(wrapperActiveClass)],
        ]), style: {
            backgroundColor: backgroundColor,
            backgroundImage: backgroundImage,
        } },
        React__default.createElement("div", { className: getClassName([
                [
                    horizontal,
                    ['h-full', 'max-h-full', 'border-b-4', 'w-16'],
                    ['rounded-t-lg', 'h-16', 'px-5', 'items-center', 'border-l-4'],
                ],
                'cursor-pointer',
                'flex',
                'border-t-4',
                'border-r-4',
                'outline-none',
                'focus:outline-none',
            ]), style: __assign(__assign({}, (!horizontal && { minHeight: '4rem' })), { borderColor: borderColor, transition: 'background-color 0.6s ease ', backgroundColor: backgroundColor }), onClick: onClick }, horizontal ? (React__default.createElement("div", { className: 'flex flex-col h-full ' },
            React__default.createElement(Icon, { iconName: 'chevron', className: getClassName(['m-5', 'h-5', 'w-5', 'text-gray-700']), style: __assign(__assign({}, (active ? {} : { transform: 'rotate(90deg)' })), { transition: '0.6s ease', minHeight: '1.25rem', minWidth: '1.25rem' }) }),
            React__default.createElement("p", { className: 'p-4 mt-auto font-sans text-lg font-bold truncate ', style: {
                    color: textColor,
                    transform: 'rotate(180deg)',
                    writingMode: 'vertical-lr',
                } }, title))) : (React__default.createElement(React__default.Fragment, null,
            React__default.createElement("p", { className: 'pr-2 font-sans text-lg font-bold text-left truncate', style: {
                    color: textColor,
                } }, title),
            React__default.createElement(Icon, { iconName: 'chevron', className: getClassName([
                    'ml-auto',
                    'm-5',
                    'h-5',
                    'w-5',
                    'text-gray-700',
                ]), style: __assign({ transition: '0.6s ease' }, (active && { transform: 'rotate(90deg)' })) })))),
        React__default.createElement("div", { className: getClassName([
                'overflow-auto',
                [active, __spreadArrays(contentActiveClass), __spreadArrays(contentInactiveClass)],
            ]), style: __assign({}, (horizontal && { borderColor: borderColor })) }, content)));
};

var Badge = function (_a) {
    var content = _a.content, _b = _a.color, color = _b === void 0 ? 'blue' : _b, _c = _a.cssClasses, cssClasses = _c === void 0 ? [] : _c, _d = _a.size, size = _d === void 0 ? 'md' : _d;
    var badgeClassName = getClassName(__spreadArrays(cssClasses, [
        "bg-" + color + "-500",
        "text-" + size,
        'text-white',
        'font-bold',
        'py-2',
        'rounded-full',
        'truncate',
        [size === 'xs', ['h-8', 'px-3'], 'px-4'],
    ]));
    return React__default.createElement("div", { className: badgeClassName }, content);
};

var Button = function (_a) {
    var value = _a.value, cssClasses = _a.cssClasses, onClick = _a.onClick, type = _a.type, _b = _a.border, border = _b === void 0 ? false : _b, _c = _a.rounded, rounded = _c === void 0 ? false : _c, buttonProps = __rest(_a, ["value", "cssClasses", "onClick", "type", "border", "rounded"]);
    var buttonClassName = getClassName(__spreadArrays(cssClasses, [
        'px-4',
        'py-2',
        'font-bold',
        'text-white',
        [rounded, 'rounded-full', 'rounded'],
        [border, 'border-4'],
    ]));
    return (React__default.createElement("button", __assign({ onClick: onClick, className: buttonClassName, type: type }, buttonProps), value));
};

var FullPageWrapper = function (_a) {
    var children = _a.children;
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    var _b = useState(window.innerHeight * 0.01), vh = _b[0], setVh = _b[1];
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', vh + "px");
    var handleResize = function () {
        // We execute the same script as before
        setVh(window.innerHeight * 0.01);
    };
    var deboundedVh = useDebounce(vh, 400);
    useEffect(function () {
        // Make sure we have a deboundedVh
        if (deboundedVh) {
            // Fire off our function
            document.documentElement.style.setProperty('--vh', deboundedVh + "px");
        }
    }, [deboundedVh]);
    useEventListener('resize', handleResize, window);
    useEventListener('orientationchange', handleResize, window);
    useEventListener('deviceorientation', handleResize, window);
    return (React__default.createElement("div", { style: {
            height: 'calc(var(--vh, 1vh) * 100)',
        } }, children));
};

var HoldingPage = function (_a) {
    var _b = _a.cssClasses, cssClasses = _b === void 0 ? [] : _b, onClick = _a.onClick, children = _a.children, _c = _a.scrollable, scrollable = _c === void 0 ? false : _c, holdingPageProps = __rest(_a, ["cssClasses", "onClick", "children", "scrollable"]);
    var holdingPageCLassName = getClassName(__spreadArrays(cssClasses, [
        'absolute',
        'h-full',
        'max-h-full',
        'w-full',
        'z-40',
        [scrollable, 'overflow-scroll'],
        'focus:outline-none',
    ]));
    return onClick ? (React__default.createElement("button", __assign({ onClick: onClick, className: holdingPageCLassName }, holdingPageProps), children)) : (React__default.createElement("div", __assign({ className: holdingPageCLassName }, holdingPageProps), children));
};

var Slider = function (_a) {
    var cssClasses = _a.cssClasses, _b = _a.range, min = _b[0], max = _b[1], defaultValues = _a.defaultValues, _c = _a.displayTicks, displayTicks = _c === void 0 ? false : _c, _d = _a.displayTracks, displayTracks = _d === void 0 ? false : _d, onUpdate = _a.onUpdate, onChange = _a.onChange, _e = _a.handleColor, handleColor = _e === void 0 ? 'blue' : _e, _f = _a.trackColor, trackColor = _f === void 0 ? 'white' : _f;
    var SliderClassName = getClassName(__spreadArrays(cssClasses));
    return (React__default.createElement("div", { className: SliderClassName },
        React__default.createElement(Slider$1, { mode: 2, step: 1, domain: [min, max], rootStyle: {
                position: 'relative',
                width: '100%',
            }, onUpdate: onUpdate, onChange: onChange, values: defaultValues },
            React__default.createElement(Rail, null, function (_a) {
                var getRailProps = _a.getRailProps;
                return (React__default.createElement(React__default.Fragment, null,
                    React__default.createElement("div", __assign({ className: 'absolute w-full cursor-pointer', style: {
                            height: 42,
                            transform: 'translate(0%, -50%)',
                            borderRadius: 7,
                        } }, getRailProps())),
                    React__default.createElement("div", { className: 'absolute w-full', style: {
                            position: 'absolute',
                            width: '100%',
                            height: 14,
                            transform: 'translate(0%, -50%)',
                            borderRadius: 7,
                            pointerEvents: 'none',
                            backgroundColor: trackColor,
                        } })));
            }),
            React__default.createElement(Handles, null, function (_a) {
                var handles = _a.handles, getHandleProps = _a.getHandleProps;
                return (React__default.createElement(React__default.Fragment, null, handles.map(function (_a) {
                    var percent = _a.percent, id = _a.id, value = _a.value;
                    return (React__default.createElement("div", { key: id },
                        React__default.createElement("div", __assign({ className: 'absolute cursor-pointer', style: {
                                left: percent + "%",
                                transform: 'translate(-50%, -50%)',
                                WebkitTapHighlightColor: 'rgba(0,0,0,0)',
                                zIndex: 5,
                                width: 28,
                                height: 42,
                                backgroundColor: 'none',
                            } }, getHandleProps(id))),
                        React__default.createElement("div", { role: 'slider', "aria-valuemin": min, "aria-valuemax": max, "aria-valuenow": value, className: 'absolute', style: {
                                left: percent + "%",
                                transform: 'translate(-50%, -50%)',
                                zIndex: 2,
                                width: 24,
                                height: 24,
                                borderRadius: '50%',
                                boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.3)',
                                backgroundColor: handleColor,
                            } })));
                })));
            }),
            displayTracks && (React__default.createElement(Tracks, { left: false, right: false }, function (_a) {
                var tracks = _a.tracks, getTrackProps = _a.getTrackProps;
                return (React__default.createElement(React__default.Fragment, null, tracks.map(function (_a) {
                    var id = _a.id, source = _a.source, target = _a.target;
                    return (React__default.createElement("div", __assign({ key: id, className: 'absolute bg-blue-700 cursor-pointer', style: {
                            transform: 'translate(0%, -50%)',
                            height: 14,
                            zIndex: 1,
                            borderRadius: 7,
                            left: source.percent + "%",
                            width: target.percent - source.percent + "%",
                        } }, getTrackProps())));
                })));
            })),
            displayTicks && (React__default.createElement(Ticks, { count: 5 }, function (_a) {
                var ticks = _a.ticks;
                return (React__default.createElement("div", { className: 'slider-ticks' }, ticks.map(function (_a) {
                    var id = _a.id, percent = _a.percent;
                    return (React__default.createElement("div", { key: id },
                        React__default.createElement("div", { className: 'absolute bg-gray-700', style: {
                                marginTop: 14,
                                width: 1,
                                height: 5,
                                left: percent + "%",
                            } }),
                        React__default.createElement("div", { className: 'absolute text-center', style: {
                                marginTop: 22,
                                fontSize: 10,
                                marginLeft: -(100 / 5) / 2 + "%",
                                width: 100 / 5 + "%",
                                left: percent + "%",
                            } })));
                })));
            })))));
};

var TransitionContext = createContext({
    parent: {},
});
var useIsInitialRender = function () {
    var isInitialRender = useRef(true);
    useEffect(function () {
        isInitialRender.current = false;
    }, []);
    return isInitialRender.current;
};
var CSSTransition = function (_a) {
    var show = _a.show, _b = _a.enter, enter = _b === void 0 ? '' : _b, _c = _a.enterFrom, enterFrom = _c === void 0 ? '' : _c, _d = _a.enterTo, enterTo = _d === void 0 ? '' : _d, _e = _a.leave, leave = _e === void 0 ? '' : _e, _f = _a.leaveFrom, leaveFrom = _f === void 0 ? '' : _f, _g = _a.leaveTo, leaveTo = _g === void 0 ? '' : _g, children = _a.children;
    var enterClasses = enter.split(' ').filter(function (s) { return s.length; });
    var enterFromClasses = enterFrom.split(' ').filter(function (s) { return s.length; });
    var enterToClasses = enterTo.split(' ').filter(function (s) { return s.length; });
    var leaveClasses = leave.split(' ').filter(function (s) { return s.length; });
    var leaveFromClasses = leaveFrom.split(' ').filter(function (s) { return s.length; });
    var leaveToClasses = leaveTo.split(' ').filter(function (s) { return s.length; });
    var addClasses = function (node, classes) {
        var _a;
        classes.length && (_a = node.classList).add.apply(_a, classes);
    };
    var removeClasses = function (node, classes) {
        var _a;
        classes.length && (_a = node.classList).remove.apply(_a, classes);
    };
    return (React__default.createElement(CSSTransition$1, { appear: show, unmountOnExit: true, in: show, addEndListener: function (node, done) {
            node.addEventListener('transitionend', done, false);
        }, onEnter: function (node) {
            addClasses(node, __spreadArrays(enterClasses, enterFromClasses));
        }, onEntering: function (node) {
            removeClasses(node, enterFromClasses);
            addClasses(node, enterToClasses);
        }, onEntered: function (node) {
            removeClasses(node, __spreadArrays(enterToClasses, enterClasses));
        }, onExit: function (node) {
            addClasses(node, __spreadArrays(leaveClasses, leaveFromClasses));
        }, onExiting: function (node) {
            removeClasses(node, leaveFromClasses);
            addClasses(node, leaveToClasses);
        }, onExited: function (node) {
            removeClasses(node, __spreadArrays(leaveToClasses, leaveClasses));
        } }, children));
};
var Transition = function (_a) {
    var show = _a.show, rest = __rest(_a, ["show"]);
    var parent = useContext(TransitionContext).parent;
    var isInitialRender = useIsInitialRender();
    var isChild = show === undefined;
    if (isChild) {
        return React__default.createElement(CSSTransition, __assign({ show: parent.show }, rest));
    }
    return (React__default.createElement(TransitionContext.Provider, { value: {
            parent: {
                show: show,
                isInitialRender: isInitialRender,
            },
        } },
        React__default.createElement(CSSTransition, __assign({ show: show }, rest))));
};

export { Accordion, AutoSuggest, Badge, Button, FullPageWrapper, HoldingPage, Icon, ObjectStateProvider, Skeleton, Slider, TextInput, Transition, getClassName, useCustomForm, useDebounce, useEventListener, useFetch, useObjectState, useServiceState };