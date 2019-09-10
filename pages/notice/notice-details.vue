<template>
	<view class="page">
		<van-nav-bar
			class="ct-navbar"
			title="消息详情"
			left-arrow
			@click-left="back"
			fixed
		/>
		<view class="ct-notice-details__container TRS_Editor">
			<h1 class="ct-notice-details__title">关于做好2019年度实验室安全工作通知</h1>
			<view class="ct-notice-details__info">
				来源：化学学院 时间：2019-09-09
			</view>
			<div class="TRS_Editor">
			<p align="justify">各学院、各实验教学中心:</p>
			<p align="justify">　　为进一步加强实验室安全管理工作，杜绝各种实验室安全事故的发生，确保学校实验室安全运行，现在全校范围内开展实验室安全隐患大排查及整改工作。有关具体要求如下：</p>
			<p align="justify">　　一、高度重视实验室安全管理工作</p>
			<p align="justify">　　各学院主要负责人、各实验教学中心负责人及实验室工作人员应及时了解和掌握所属实验室的安全状况、危险物资的使用及管理情况；严格按照国家相关规定和管理办法，加大实验室安全工作力度，切实落实各项管理制度和要求，对实验室的重点部位和薄弱环节进行重点排查，形成安全隐患排查及整改台账，完善安全设施、堵塞漏洞，排除隐患，确保安全。</p>
			<p align="justify">　　二、完善实验室安全管理制度和实验标准操作规程</p>
			<p align="justify">　　实验室安全问题是学校安全工作的重要组成部分，各学院要成立实验室安全领导小组和工作小组，为安全大检查提供组织保障，制定有针对性、切实可行的安全技术与安全管理办法。</p>
			<p align="justify">　　1.各实验教学中心要根据各自的特点，梳理和制定安全管理制度及实施细则。安全管理制度包括：实验教学中心安全与卫生管理制度、实验教学中心学生实验守则、实验教学中心仪器设备日常维护管理制度、危险品管理制度、安全防盗防火制度等。</p>
			<p align="justify">　　2.各实验教学中心要根据国家标准和实验室技术规范等相关要求，编制实验标准操作规程，包括：大型仪器设备操作规程、个人防护设备使用规程、危险废弃物的处置规程和实验紧急情况处理规程等。</p>
			<p align="justify">　　3.各实验教学中心应制定突发安全事故应急预案，使实验室人员具备基本的处置突发事件的能力。</p>
			<p align="justify">　　4.对于在实验室工作学习的师生，各实验室应根据实际情况，按照“谁主管，谁负责”的原则，进一步明确实验室安全责任制，切实将各个环节、各个实验室的安全责任落到实处。</p>
			<p align="justify">　　5.各学院要重新梳理实验教学项目中存在的所有安全隐患点，制定详细的实验流程，标注出安全隐患点，在教学过程中加以示范和警示。</p>
			<p align="justify">　　三、进一步做好实验室安全培训和安全准入工作</p>
			<p align="justify">　　各学院、各实验教学中心要将实验室安全教育与培训工作制度化、常态化，并将重要制度和操作规程经整理后采用制作标牌、上墙等形式予以提醒警示，以全面提高师生的安全意识和自我防范能力，确保相关人员全面掌握实验技术规范、操作规程和安全防护知识。</p>
			<p align="justify">　　实验室安全工作是实验教学中心工作的重中之重，各学院、各实验教学中心务必高度重视，严格按照通知要求进行自查自纠，积极组织和落实好实验室安全工作，完善相关制度和技术规程，保持安全隐患排查的常态化，发现安全隐患，及时认真落实整改，做好台账记录，确保实验教学科研工作的顺利进行。学校将对各实验教学中心实验室安全隐患排查和整改情况进行检查。各实验教学中心将自查自纠的《实验室安全检查记录表》（见附件）电子版于12月18日前发到邮箱：100001@sdyu.edu.cn。</p>
			<p align="justify">　　附件：实验室安全检查记录表</p>
			<p align="justify">　　</p>
			<p align="justify">&nbsp;</p>
			<p align="justify">&nbsp;</p>
			<p align="right">&nbsp;化学学院&nbsp;&nbsp;</p>
			<p align="right">　　2019年09月09日</p>
			</div>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
			/**
			 * 回退
			 */
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
		}
	}
</script>

<style>
.TRS_Editor P {
    line-height:1.5;
    font-family:宋体;
    font-size:12pt;
		text-indent: 2em;
}
.TRS_Editor DIV {
    line-height:1.5;
    font-family:宋体;
    font-size:12pt;
}
.TRS_Editor TD {
    line-height:1.5;
    font-family:宋体;
    font-size:12pt;
}
.TRS_Editor TH {
    line-height:1.5;
    font-family:宋体;
    font-size:12pt;
}
.TRS_Editor SPAN {
    line-height:1.5;
    font-family:宋体;
    font-size:12pt;
}
.TRS_Editor FONT {
    line-height:1.5;
    font-family:宋体;
    font-size:12pt;
}
.TRS_Editor UL {
    line-height:1.5;
    font-family:宋体;
    font-size:12pt;
}
.TRS_Editor LI {
    line-height:1.5;
    font-family:宋体;
    font-size:12pt;
}
.TRS_Editor A {
    line-height:1.5;
    font-family:宋体;
    font-size:12pt;
}
</style>
