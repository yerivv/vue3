<template>
	<!-- 이벤트 수식어! 버블링과 캡쳐링!!!! -->
	<div id="modifiers">
		<div @click="clickDiv">
			Div 영역
			<!-- 나만 실행할 수 있음!! -->
			<p @click.self="clickP('안녕', $event)">
				P 영역
				<!-- 버블링을 막고 해당 이벤트만 실행 -->
				<span @click="clickSpan">Span 영역</span>
				<!-- 해당 기능을 막고, 버블링을 막고 해당 이벤트만 실행 -->
				<a href="//www.naver.com" @click.prevent.stop="clickA">a 영역</a>
			</p>
		</div>
		<button @click.once="clickButton">Button 영역(once)</button>
	</div>
</template>

<script>
export default {
	setup() {
		const clickDiv = () => {
			console.log('clickDiv');
			//location.href = '//www.naver.com';
		};
		const clickP = (msg, event) => {
			console.log('clickP');
			console.log('msg: ', msg, 'target:', event.target);
		};
		const clickSpan = () => {
			console.log('clickSpan');
			alert('좋아요');
		};
		const clickA = () => {
			console.log('clickA');
			alert('a링크 역할 못하기');
		};
		const clickButton = () => {
			console.log('clickButton');
		};
		return { clickDiv, clickP, clickSpan, clickA, clickButton };
	},
};
</script>

<style lang="scss" scoped>
#modifiers {
	* {
		padding: 30px;
	}
	div {
		background-color: #eee;
		p {
			background-color: #ccc;
			span {
				display: block;
				background-color: #aaa;
			}
		}
	}
}
</style>
