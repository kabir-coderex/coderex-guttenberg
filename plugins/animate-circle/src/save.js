/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";
import shapeImage from "./shape.png";
import defaultImage from "./../../image.png";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	const { img1, img2, img3 } = attributes;
	return (
		<>
			<div class="coderex-shape-wrapper">
				<div class="coderex-shape">
					<img width="700" height="600" src={shapeImage} alt="shape" priority />

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
