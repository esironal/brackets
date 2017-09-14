/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */

define({
    "ATTRIBUTE_IN_CLOSING_TAG": "<p>The closing <code>&lt;/[[closeTag.name]]&gt;</code> tag <em data-highlight='[[closeTag.start]],[[closeTag.end]]'>here</em> cannot contain any attributes.</p>",
    "CLOSE_TAG_FOR_VOID_ELEMENT": "<p>The closing <code>&lt;/[[closeTag.name]]&gt;</code> tag <em data-highlight='[[closeTag.start]],[[closeTag.end]]'>here</em> is for a void element (that is, an element that doesn't need to be closed).</p>",
    "CSS_MIXED_ACTIVECONTENT": "<p>The CSS property <em data-highlight='[[cssProperty.start]],[[cssProperty.end]]'>[[cssProperty.property]]</em> has a url() value <em data-highlight='[[cssValue.start]],[[cssValue.end]]'>here</em> that currently points to an insecure resource. You can make this error disappear by logging into Webmaker. For more information on how modern browsers signal insecure content, visit <a href='https://developer.mozilla.org/en-US/docs/Security/MixedContent'>this link</a>.</p>",
    "EVENT_HANDLER_ATTR_NOT_ALLOWED": "<p>Sorry, but security restrictions on this site prevent you from using the JavaScript event handler attribute <em data-highlight='[[name.start]],[[name.end]]'>here</em>. If you really need to use JavaScript, consider using <a href='http://jsbin.com/'>jsbin</a> or <a href='http://jsfiddle.net/'>jsfiddle</a>.</p>",
    "HTML_CODE_IN_CSS_BLOCK": "<p>HTML code was detected in CSS context starting <em data-highlight='[[html.start]],[[html.end]]'>here</em></p>",
    "HTTP_LINK_FROM_HTTPS_PAGE": "<p>The <code>&lt;[[openTag.name]]&gt;</code> tag's <code>[[attribute.name.value]]</code> attribute (<em data-highlight='[[attribute.value.start]],[[attribute.value.end]]'>here</em>) currently points to an insecure resource. You can make this error disappear by logging into Webmaker. For more information on how modern browsers signal insecure content, visit <a href='https://developer.mozilla.org/en-US/docs/Security/MixedContent'>this link</a>.</p>",
    "INVALID_ATTR_NAME": "<p>The attribute <em data-highlight='[[start]],[[end]]'>here</em> has a name that is not permitted under HTML5 naming conventions.</p>",
    "UNSUPPORTED_ATTR_NAMESPACE": "<p>The attribute <em data-highlight='[[start]],[[end]]'>here</em> uses an attribute namespace that is not permitted under HTML5 conventions.</p>",
    "MULTIPLE_ATTR_NAMESPACES": "<p>The attribute <em data-highlight='[[start]],[[end]]'>here</em> has multiple namespaces. Check your text and make sure there's only a single namespace prefix for the attribute.</p>",
    "INVALID_CSS_DECLARATION": "<p><em data-highlight='[[cssDeclaration.start]],[[cssDeclaration.end]]'>This</em> CSS declaration never closes.</p>",
    "INVALID_CSS_PROPERTY_NAME": "<p>CSS property <em data-highlight='[[cssProperty.start]],[[cssProperty.end]]'>[[cssProperty.property]]</em> does not exist. You may want to see a <a href='https://developer.mozilla.org/en/CSS/CSS_Reference'>list of CSS properties</a>.</p>",
    "INVALID_CSS_RULE": "<p><em data-highlight='[[cssRule.start]],[[cssRule.end]]'>This</em> CSS rule is not legal CSS.</p>",
    "INVALID_TAG_NAME": "<p>The <code>&lt;</code> character <em data-highlight='[[openTag.start]],[[openTag.end]]'>here</em> appears to be the beginning of a tag, but is not followed by a valid tag name.</p> <p>If you just want a <code>&lt;</code> to appear on your Web page, try using <code>&amp;lt;</code> instead.</p> <p>Or, see a <a href='https://developer.mozilla.org/en/docs/Web/Guide/HTML/HTML5/HTML5_element_list'>list of HTML5 tags</a>.</p>",
    "JAVASCRIPT_URL_NOT_ALLOWED": "<p>Sorry, but security restrictions on this site prevent you from using the <code>javascript:</code> URL <em data-highlight='[[value.start]],[[value.end]]'>here</em>. If you really need to use JavaScript, consider using <a href='http://jsbin.com/'>jsbin</a> or <a href='http://jsfiddle.net/'>jsfiddle</a>.</p>",
    "MISMATCHED_CLOSE_TAG": "<p>The closing <code data-highlight='[[closeTag.start]],[[closeTag.end]]'>&lt;/[[closeTag.name]]&gt;</code> tag doesn't pair with the opening <code data-highlight='[[openTag.start]],[[openTag.end]]'>&lt;[[openTag.name]]&gt;</code> tag. This is likely due to a missing <code>&lt;/[[openTag.name]]&gt;</code> tag.",
    "MISSING_CSS_BLOCK_CLOSER": "<p>Missing block closer or next property:value; pair following <em data-highlight='[[cssValue.start]],[[cssValue.end]]'>[[cssValue.value]]</em>.</p>",
    "MISSING_CSS_BLOCK_OPENER": "<p>Missing block opener after <em data-highlight='[[cssSelector.start]],[[cssSelector.end]]'>[[cssSelector.selector]]</em>.</p>",
    "MISSING_CSS_PROPERTY": "<p>Missing property for <em data-highlight='[[cssSelector.start]],[[cssSelector.end]]'>[[cssSelector.selector]]</em>.</p>",
    "MISSING_CSS_SELECTOR": "<p>Missing either a new CSS selector or the &lt;/style&gt; tag <em data-highlight='[[cssBlock.start]],[[cssBlock.end]]'>here</em>.</p>",
    "MISSING_CSS_VALUE": "<p>Missing value for <em data-highlight='[[cssProperty.start]],[[cssProperty.end]]'>[[cssProperty.property]]</em>.</p>",
    "SCRIPT_ELEMENT_NOT_ALLOWED": "<p>Sorry, but security restrictions on this site prevent you from using <code>&lt;script&gt;</code> tags <em data-highlight='[[openTag.start]],[[closeTag.end]]'>here</em>. If you really need to use JavaScript, consider using <a href='http://jsbin.com/'>jsbin</a> or <a href='http://jsfiddle.net/'>jsfiddle</a>.</p>",
    "SELF_CLOSING_NON_VOID_ELEMENT": "<p>The <code>&lt;[[name]]&gt;</code> tag <em data-highlight='[[start]],[[end]]'>here</em> can't be self-closed, because <code>&lt;[[name]]&gt;</code> is not a void element; it must be closed with a separate <code>&lt;/[[name]]&gt;</code> tag.</p>",
    "UNCAUGHT_CSS_PARSE_ERROR": "<p>A parse error occurred outside expected cases: <em data-highlight='[[error.start]],[[error.end]]'>[[error.msg]]</em></p>",
    "UNCLOSED_TAG": "<p>The <code>&lt;[[openTag.name]]&gt;</code> tag <em data-highlight='[[openTag.start]],[[openTag.end]]'>here</em> never closes.</p>",
    "UNEXPECTED_CLOSE_TAG": "<p>The closing <code>&lt;/[[closeTag.name]]&gt;</code> tag <em data-highlight='[[closeTag.start]],[[closeTag.end]]'>here</em> doesn't pair with anything, because there are no opening tags that need to be closed.</p>",
    "UNFINISHED_CSS_PROPERTY": "<p>Property <em data-highlight='[[cssProperty.start]],[[cssProperty.end]]'>[[cssProperty.property]]</em> still needs finalizing with :</p>",
    "UNFINISHED_CSS_SELECTOR": "<p>Selector <em data-highlight='[[cssSelector.start]],[[cssSelector.end]]'>[[cssSelector.selector]]</em> still needs finalizing with {</p>",
    "UNFINISHED_CSS_VALUE": "<p>Value <em data-highlight='[[cssValue.start]],[[cssValue.end]]'>[[cssValue.value]]</em> still needs finalizing with ;</p>",
    "UNKOWN_CSS_KEYWORD": "<p>The CSS @keyword <em data-highlight='[[cssKeyword.start]],[[cssKeyword.end]]'>[[cssKeyword.value]]</em> does not match any known @keywords.</p>",
    "UNQUOTED_ATTR_VALUE": "<p>The Attribute value <em data-highlight='[[start]]'>here</em> should start with an opening double quote.</p>",
    "UNTERMINATED_ATTR_VALUE": "<p>The <code>&lt;[[openTag.name]]&gt;</code> tag's <code>[[attribute.name.value]]</code> attribute has a value <em data-highlight='[[attribute.value.start]]'>here</em> that doesn't end with a closing double quote.</p>",
    "UNTERMINATED_CLOSE_TAG": "<p>The closing <code>&lt;/[[closeTag.name]]&gt;</code> tag <em data-highlight='[[closeTag.start]],[[closeTag.end]]'>here</em> doesn't end with a <code>&gt;</code>.</p>",
    "UNTERMINATED_COMMENT": "<p>The comment <em data-highlight='[[start]]'>here</em> doesn't end with a <code>--&gt;</code>.</p>",
    "UNTERMINATED_CSS_COMMENT": "<p>The CSS comment <em data-highlight='[[start]]'>here</em> doesn't end with a <code>*/</code>.</p>",
    "UNTERMINATED_OPEN_TAG": "<p>The opening <code>&lt;[[openTag.name]]&gt;</code> tag <em data-highlight='[[openTag.start]],[[openTag.end]]'>here</em> doesn't end with a <code>&gt;</code>.</p>"
});
