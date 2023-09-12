/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({attributes}) {
	const { bgImgURL, backgroundColor } = attributes;

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
		<div { ...useBlockProps.save() } style={{background: bgImgURL ? `linear-gradient(${hexToRGBA(backgroundColor,0.6)}, ${hexToRGBA(backgroundColor,0.7)}), url(${bgImgURL})`  : backgroundColor}}>
			<InnerBlocks.Content/>
		</div>
	);
}
