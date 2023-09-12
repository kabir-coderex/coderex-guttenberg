/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import {PanelBody, PanelRow, TextControl} from '@wordpress/components'

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { buttonText, buttonLink } = attributes;
	const handleButtonText = text =>{
		setAttributes({buttonText: text})
	}
	const handleButtonLink = link =>{
		setAttributes({buttonLink: link})
	}
	return (
		<>
		<InspectorControls>
				<PanelBody title={__("Additional Settings")} initialOpen={true}>
					{/* Button Text and Link */}
					<PanelRow>
						<fieldset>
							<TextControl
								value={buttonText}
								onChange={handleButtonText}
								label={__("Button Text")}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextControl
								value={buttonLink}
								onChange={handleButtonLink}
								label={__("Button Link")}
							/>
						</fieldset>
					</PanelRow>

					
				</PanelBody>
			</InspectorControls>
			<a
				className="cr-btn-default let-us-talk-btn svg-btn-effect crx"
				{...useBlockProps()}
			>
				<svg>
					<rect x="2" y="2" rx="30" fill="none" width="98%" height="56"></rect>
				</svg>
				<span>{buttonText ? buttonText : "Button"}</span>
			</a>
		</>
	);
}
