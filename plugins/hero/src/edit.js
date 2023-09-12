/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
	PanelColorSettings,
	InnerBlocks
} from "@wordpress/block-editor";
import { PanelBody, PanelRow } from "@wordpress/components";

import defaultImage from "./../../image.png";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { bgImgURL, backgroundColor } = attributes;

	// Functions
	const handleBgImg = (image) => {
		setAttributes({ bgImgURL: image.url, bgImgAlt: image.alt });
	};
	const handleBgColor = color =>{
		setAttributes({backgroundColor: color})
	}

	// Hex to rgba
	const hexToRGBA = (hex, opacity) =>{
		hex = hex.replace(/^#/, '');

		if (hex.length === 3) {
		  hex = hex
			.split('')
			.map((char) => char + char)
			.join('');
		}
	  
		const bigint = parseInt(hex, 16);
		const r = (bigint >> 16) & 255;
		const g = (bigint >> 8) & 255;
		const b = bigint & 255;
	  
		return `rgba(${r}, ${g}, ${b}, ${opacity})`;
	  }

	return (
		<>
		<InspectorControls>
				<PanelBody title={__("Additional Settings")} initialOpen={true}>
					{/* For Background Image */}
					<PanelRow>
						<fieldset>
							<MediaUpload
								label={__("Background Image")}
								type="image"
								value={bgImgURL}
								onSelect={handleBgImg}
								render={({ open }) => (
									<div>
										<img
											src={bgImgURL ? bgImgURL : defaultImage}
											onClick={open}
											alt={__("Click to Open")}
											style={{ cursor: "pointer" }}
										/>
										{bgImgURL && (
											<p>
												{__("Selected Image URL")}: {bgImgURL}
											</p>
										)}
									</div>
								)}
							/>
						</fieldset>
					</PanelRow>

					{/* For Background Color */}
					<PanelRow>
						<fieldset>
							<PanelColorSettings
								title={__("Color Settings")}
								initialOpen={true}
								colorSettings={[
									{
										value: backgroundColor,
										onChange: handleBgColor,
										label: __("Background Color")
									}
								]}
							/>
						</fieldset>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()} style={{background: bgImgURL ? `linear-gradient(${hexToRGBA(backgroundColor,0.6)}, ${hexToRGBA(backgroundColor,0.7)}), url(${bgImgURL})`  : backgroundColor}}>
				<InnerBlocks/>
			</div>
		</>
	);
}
