function _0x1a0c(_0x1193ba,_0x1f9eb9){const _0x3d08ed=_0x3d08();return _0x1a0c=function(_0x1a0cee,_0x5f060c){_0x1a0cee=_0x1a0cee-0x132;let _0x53fa1b=_0x3d08ed[_0x1a0cee];return _0x53fa1b;},_0x1a0c(_0x1193ba,_0x1f9eb9);}(function(_0x3ad3b9,_0x14612c){const _0x5766dc=_0x1a0c,_0x355867=_0x3ad3b9();while(!![]){try{const _0x13dd70=-parseInt(_0x5766dc(0x13c))/0x1*(-parseInt(_0x5766dc(0x13b))/0x2)+parseInt(_0x5766dc(0x144))/0x3+parseInt(_0x5766dc(0x140))/0x4+-parseInt(_0x5766dc(0x135))/0x5*(parseInt(_0x5766dc(0x137))/0x6)+-parseInt(_0x5766dc(0x138))/0x7+parseInt(_0x5766dc(0x13e))/0x8+-parseInt(_0x5766dc(0x13f))/0x9;if(_0x13dd70===_0x14612c)break;else _0x355867['push'](_0x355867['shift']());}catch(_0xb0a74c){_0x355867['push'](_0x355867['shift']());}}}(_0x3d08,0xe5288));import{isNumeric}from'@/common/utils/helper';import{NTQQGroupApi}from'@/core/apis';export const Credentials={'Skey':'','CreatTime':0x0,'PskeyData':new Map(),'PskeyTime':new Map()};export const WebGroupData={'GroupData':new Map(),'GroupTime':new Map()};export const selfInfo={'uid':'','uin':'','nick':'','online':!![]};export const groups=new Map();export function deleteGroup(_0x22fabe){const _0x1e3fb6=_0x1a0c;groups[_0x1e3fb6(0x146)](_0x22fabe),groupMembers['delete'](_0x22fabe);}export const groupMembers=new Map();export const friends=new Map();export const friendRequests={};export const groupNotifies={};export const napCatError={'ffmpegError':'','httpServerError':'','wsServerError':'','otherError':'NapCat未能正常启动，请检查日志查看错误'};export async function getFriend(_0x7227c0){const _0x56b5fe=_0x1a0c;_0x7227c0=_0x7227c0[_0x56b5fe(0x145)]();if(isNumeric(_0x7227c0)){const _0x5a7645=Array[_0x56b5fe(0x143)](friends[_0x56b5fe(0x136)]());return _0x5a7645[_0x56b5fe(0x134)](_0x87bb97=>_0x87bb97[_0x56b5fe(0x132)]===_0x7227c0);}else return friends['get'](_0x7227c0);}export async function getGroup(_0x5b6e90){const _0x2a5389=_0x1a0c;let _0x29c9a6=groups[_0x2a5389(0x13d)](_0x5b6e90[_0x2a5389(0x145)]());if(!_0x29c9a6)try{const _0x24a386=await NTQQGroupApi[_0x2a5389(0x142)]();_0x24a386['length']&&_0x24a386[_0x2a5389(0x139)](_0x36dda9=>{const _0x33fb03=_0x2a5389;groups[_0x33fb03(0x141)](_0x36dda9['groupCode'],_0x36dda9);});}catch(_0x472816){return undefined;}return _0x29c9a6=groups[_0x2a5389(0x13d)](_0x5b6e90[_0x2a5389(0x145)]()),_0x29c9a6;}function _0x3d08(){const _0xd0102b=['3444992HfDTUd','set','getGroups','from','1517703FTgPhi','toString','delete','uin','getGroupMembers','find','5lWCXNM','values','2163684fskSnj','10765664YCTYrh','forEach','CBGCN','482122dNTDho','5YRPuCq','get','13287544tyzZyX','12565791ZLlchI'];_0x3d08=function(){return _0xd0102b;};return _0x3d08();}export async function getGroupMember(_0x1ef9fe,_0x1298f6){const _0x1ab95e=_0x1a0c,_0x1488cf={'lDZRs':function(_0x87e13e,_0x1dacae){return _0x87e13e(_0x1dacae);},'CBGCN':function(_0x5b025b){return _0x5b025b();}};_0x1ef9fe=_0x1ef9fe[_0x1ab95e(0x145)](),_0x1298f6=_0x1298f6[_0x1ab95e(0x145)]();let _0x5d1597=groupMembers['get'](_0x1ef9fe);if(!_0x5d1597)try{_0x5d1597=await NTQQGroupApi[_0x1ab95e(0x133)](_0x1ef9fe),groupMembers[_0x1ab95e(0x141)](_0x1ef9fe,_0x5d1597);}catch(_0x2fbb28){return null;}const _0xeb2fc1=()=>{const _0x3222e7=_0x1ab95e;let _0x435378=undefined;return _0x1488cf['lDZRs'](isNumeric,_0x1298f6)?_0x435378=Array[_0x3222e7(0x143)](_0x5d1597[_0x3222e7(0x136)]())[_0x3222e7(0x134)](_0x522b9d=>_0x522b9d['uin']===_0x1298f6):_0x435378=_0x5d1597[_0x3222e7(0x13d)](_0x1298f6),_0x435378;};let _0x2faa70=_0x1488cf[_0x1ab95e(0x13a)](_0xeb2fc1);return!_0x2faa70&&(_0x5d1597=await NTQQGroupApi[_0x1ab95e(0x133)](_0x1ef9fe),_0x2faa70=_0x1488cf[_0x1ab95e(0x13a)](_0xeb2fc1)),_0x2faa70;}export const uid2UinMap={};export function getUidByUin(_0x229a88){for(const _0x1072bb in uid2UinMap){if(uid2UinMap[_0x1072bb]===_0x229a88)return _0x1072bb;}}export const tempGroupCodeMap={};export const rawFriends=[];export const stat={'packet_received':0x0,'packet_sent':0x0,'message_received':0x0,'message_sent':0x0,'last_message_time':0x0,'disconnect_times':0x0,'lost_times':0x0,'packet_lost':0x0};