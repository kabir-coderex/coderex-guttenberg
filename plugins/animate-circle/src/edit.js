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
import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
} from "@wordpress/block-editor";

import { PanelBody, PanelRow } from "@wordpress/components";

import shapeImage from "./shape.png";
import defaultImage from "./../../image.png";


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
export default function Edit({attributes, setAttributes}) {
	const {img1, img2, img3} = attributes;

	const handleImg1 = img =>{
		setAttributes({img1: img.url})
	}
	const handleImg2 = img =>{
		setAttributes({img2: img.url})
	}
	const handleImg3 = img =>{
		setAttributes({img3: img.url})
	}
	return (
		<>

		<InspectorControls>
				<PanelBody title={__("Additional Settings")} initialOpen={true}>
					{/* For  Images */}
					<PanelRow>
						<fieldset>
							<MediaUpload
								label={__("Image 1")}
								type="image"
								value={img1}
								onSelect={handleImg1}
								render={({ open }) => (
									<div>
										<img
											src={img1 ? img1 : defaultImage}
											onClick={open}
											alt={__("Click to Open")}
											style={{ cursor: "pointer" }}
										/>
										{img1 && (
											<p>
												{__("Selected Image URL")}: {img1}
											</p>
										)}
									</div>
								)}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<MediaUpload
								label={__("Background Image")}
								type="image"
								value={img2}
								onSelect={handleImg2}
								render={({ open }) => (
									<div>
										<img
											src={img2 ? img2 : defaultImage}
											onClick={open}
											alt={__("Click to Open")}
											style={{ cursor: "pointer" }}
										/>
										{img2 && (
											<p>
												{__("Selected Image URL")}: {img2}
											</p>
										)}
									</div>
								)}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<MediaUpload
								label={__("Background Image")}
								type="image"
								value={img3}
								onSelect={handleImg3}
								render={({ open }) => (
									<div>
										<img
											src={img3 ? img3 : defaultImage}
											onClick={open}
											alt={__("Click to Open")}
											style={{ cursor: "pointer" }}
										/>
										{img3 && (
											<p>
												{__("Selected Image URL")}: {img3}
											</p>
										)}
									</div>
								)}
							/>
						</fieldset>
					</PanelRow>

				</PanelBody>
			</InspectorControls>

			<div class="coderex-shape-wrapper" {...useBlockProps()}>
				<div class="coderex-shape">
					<img width="840" height="763" src={shapeImage} alt="shape" priority />

					<div class="circle-wrapper">
						<span class="sml-circle sml1">
							<span>
								<img
									width="59"
									height="60"
									src={img1 ? img1 : defaultImage}
									alt="wordpress icon"
									priority
								/>
							</span>
						</span>

						<span class="sml-circle sml2">
							<span>
								<img
									width="59"
									height="60"
									src={img2 ? img2 : defaultImage}
									alt="wordpress icon"
									priority
								/>
							</span>
						</span>

						<span class="sml-circle sml3">
							<span>
								<img
									width="59"
									height="60"
									src={img3 ? img3 : defaultImage}
									alt="woocommerce icon"
									priority
								/>
							</span>
						</span>
					</div>
				</div>
			</div>
		</>
	);
}
