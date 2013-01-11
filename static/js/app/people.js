$(document).ready(function () {
	if (document.getElementById('v_Elem'))
	{
		$.tabs('#v_Elem');
	}
	
	if (document.getElementById('c_Level'))
	{
		$.tabs('#c_Level');
	}
	
	bp_more_load(G_BASE_URL + '/people/ajax/user_actions/uid-' + PEOPLE_USER_ID + '__actions-201', $('#bp_user_actions_answers_more'), $('#contents_user_actions_answers'));	// 参与的问题
			  
	bp_more_load(G_BASE_URL + '/people/ajax/user_actions/uid-' + PEOPLE_USER_ID + '__actions-101', $('#bp_user_actions_questions_more'), $('#contents_user_actions_questions'));	// 发起的问题
		
	bp_more_load(G_BASE_URL + '/people/ajax/user_actions/distint-1__uid-' + PEOPLE_USER_ID + '__actions-' + ACTIVITY_ACTIONS, $('#bp_user_actions_more'), $('#contents_user_actions'));	// 个人动态
		
	bp_more_load(G_BASE_URL + '/people/ajax/follows/type-follows__uid-' + PEOPLE_USER_ID, $('#bp_user_follows_more'), $('#contents_user_follows'));	// 关注
	bp_more_load(G_BASE_URL + '/people/ajax/follows/type-fans__uid-' + PEOPLE_USER_ID, $('#bp_user_fans_more'), $('#contents_user_fans'));	// 粉丝
		
	bp_more_load(G_BASE_URL + '/people/ajax/topics/uid-' + PEOPLE_USER_ID, $('#bp_user_topics_more'), $('#contents_user_topics'));	// 话题
});