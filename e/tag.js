var x_pid=46;var wp='_self',p='goto',q='[data-link]';$(q).hover(function(){$(this).css({cursor:'pointer'})},function(){$(this).css({cursor:'initial'})}),$(q).mousedown(function(n){var i=$(this).data('link');return 2===n.which?window.open('/'+p+'/'+i):window.open('/'+p+'/'+i,wp),!1});