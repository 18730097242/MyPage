function copyArticle(event) {
        const range = document.createRange();
        range.selectNode(document.getElementById('copyBT'));
 
        const selection = window.getSelection();
        if(selection.rangeCount > 0) selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
        alert("复制成功！");
      }
 
      document.getElementById('copyBT').addEventListener('click', copyArticle, false);
