//Nav 
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

//Forum

document.getElementById('new-topic').addEventListener('submit', function(event) {
    event.preventDefault();
    var topicTitle = document.getElementById('topic-title').value;
    var topicDescription = document.getElementById('topic-description').value;
    var newTopic = document.createElement('li');
    newTopic.innerHTML = '<h3>' + topicTitle + '</h3><p>Posted by: User 1</p><p>Views: 0</p><p>Replies: 0</p>';
    document.getElementById('topics').appendChild(newTopic);
    document.getElementById('topic-title').value = '';
    document.getElementById('topic-description').value = '';
  });