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
import React from "react";
import { Link } from "react-router-dom";

import { useBlockProps, InspectorControls, MediaUpload } from "@wordpress/block-editor";
import { PanelBody, PanelRow, TextControl, TextareaControl } from "@wordpress/components";
import defaultImage from "./../../image.png";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";
// import css from '../../style.js'

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { image, heading, subHeading, buttonText, buttonLink } = attributes;

	// Handle Functions
	const handleImage = (img) => {
		setAttributes({ image: img.url });
	};
	const handleHeading = (text) => {
		setAttributes({ heading: text });
	};
	const handleSubHeading = (text) => {
		setAttributes({ subHeading: text });
	};
	const handleButtonText = (text) => {
		setAttributes({ buttonText: text });
	};
	const handleButtonLink = (text) => {
		setAttributes({ buttonLink: text });
	};
	return (
		<>
			<InspectorControls>
				{/* Text Settings */}
				<PanelBody title={__("Text Settings")} initialOpen={true}>
					<PanelRow>
						<fieldset>
							<TextControl
								value={heading}
								onChange={handleHeading}
								label={__("Heading")}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextareaControl
								value={subHeading}
								onChange={handleSubHeading}
								label={__("Sub Heading")}
							/>
						</fieldset>
					</PanelRow>
				</PanelBody>
				{/* Image Settings */}
				<PanelBody title={__("Image Settings")} initialOpen={true}>
					<PanelRow>
						<fieldset>
							<MediaUpload
								label={__("Left Side Image")}
								type="image"
								value={image}
								onSelect={handleImage}
								render={({ open }) => (
									<div>
										<img
											src={image ? image : defaultImage}
											onClick={open}
											alt={__("Click to Open")}
											style={{ cursor: "pointer" }}
										/>
										{image && (
											<p>
												{__("Selected Image URL")}: {image}
											</p>
										)}
									</div>
								)}
							/>
						</fieldset>
					</PanelRow>
				</PanelBody>

				{/* Button Settings */}
				<PanelBody title={__("Button Settings")} initialOpen={true}>
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

			<div {...useBlockProps()}>
				<section className="cr-hire pos-relative">
					<div className="hire-illustration-wrapper">
						{image ? (
							<img
								width="839"
								height="791"
								src={image}
								className="img-fluid hire-illustration"
								alt="hire image"
							/>
						) : (
							<img
								width="839"
								height="791"
								src={defaultImage}
								className="img-fluid hire-illustration"
								alt="hire image"
							/>
						)}
					</div>

					<div className="cr-container">
						<div className="cr-row">
							<div className="cr-col">
								<div className="hire-content">
									<h2 className="circular-700 color-232 crx">{heading}</h2>
									<div className="crx description">{subHeading}</div>
									<a
										className="cr-btn-default lets-talk-btn svg-btn-effect crx"
										href={buttonLink}
										style={{textDecoration:"none", color:"#00b4ff"}}
									>
										<svg>
											<rect
												x="2"
												y="2"
												rx="30"
												fill="none"
												width="98%"
												height="56"
											></rect>
										</svg>
										<span>{buttonText}</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
