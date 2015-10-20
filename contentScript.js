console.log('LGTM extension now running...');

function saveComment(comment) {
  $('div.timeline-comment div.write-content textarea').val(comment);
  $('div.timeline-comment div.form-actions button:contains(Comment)').click();
}

var lgtmBtn = $('<button class="btn btn-primary js-merge-branch-action lgtm" type="button">' +
              '  <img class="emoji" title=":+1:" alt=":+1:" src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f44d.png" height="20" width="20" align="absmiddle">' +
              '  LGTM' +
              '</button>');

lgtmBtn.click(() => {
  saveComment('LGTM');
});

$('div.merge-message .btn.btn-primary.js-merge-branch-action').after(lgtmBtn);
