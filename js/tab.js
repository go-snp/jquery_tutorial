$(function() {

  $(".tab").click(function() {

    // クリックされたタブのインデックスを取得
    var clickedTabIndex = $(".tab").index(this);

    // 全タブの選択状態を解除
    $(".tab_selected").removeClass("tab_selected");

    // 新たに選択されたタブに選択状態を付与
    $(".tab").eq(clickedTabIndex).addClass("tab_selected");

    // 全コンテンツをいったん不可視にする
    $(".content").addClass("content_hidden")

    // 新たに選択されたコンテンツの不可視状態を外し、可視にする
    $(".content").eq(clickedTabIndex).removeClass("content_hidden")
  });
});
