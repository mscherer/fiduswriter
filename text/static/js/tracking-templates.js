/**
 * This file is part of Fidus Writer <http://www.fiduswriter.com>
 *
 * Copyright (C) 2013 Takuto Kojima, Johannes Wilm
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

var tmp_reviewchangebox = '<div id="review-box-<%= cid %>" data-cid="<%= cid %>" class="review-box <%= node_class %>"\
    style="top:<%= node_offset.top %>; left:<%= node_offset.left %>;">\
        <div class="change-owner">\
            <img class="change-owner-avatar" src="<%= change_owner["avatar"] %>">\
            <h5 class="change-owner-name"><%= change_owner["user_name"] %></h5>\
            <p class="change-date"><%= change_time %></p>\
        </div>\
        <button class="accept icon-ok" value="Accept">'+gettext('Accept Change')+'</button>\
        <button class="reject icon-cancel" value="Reject">'+gettext('Reject Change')+'</button>\
        <span class="close icon-cancel-circle"></span>\
    </div>';