module.exports.config = {
    name: "cmd",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "Mirai Team",
    description: "Quản lý/Kiểm soát toàn bộ module của bot",
    commandCategory: "Hệ thống admin-bot",
    usages: "[load/unload/loadAll/unloadAll/info] [tên module]",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "child_process": "",
        "path": ""
    }
};

const loadCommand = function ({
    moduleList,
    threadID,
    messageID
}) {
    const _0x48eb = ['1333058IzWnPx', 'join', 'abled', 'fs-extra', '227wTAmmX', 'cài đặt pa', 'commandDis', 'warn', 'mainPath', 'commandCat', 'thấy packa', 'set', 'hasOwnProp', 'cache', 'npm --pack', 'utf8', 'onLoad mod', 'nodemodule', '1612658ZaBbEI', 'Loaded ', 'nh dạng!', 'ra sự cố k', 'config', 'erty', 'h cài đặt.', 'stack', 'Object', 'shell', 'Module khô', 'child_proc', 'dependenci', 'Loaded con', 'ỗi: ', '3761XvbYRL', 'nh công to', 'ules', '14538YWVnos', '591253NrQTPp', 'o module ', 'resolve', 'configValu', 'inherit', 'cwd', 'run', '1386957UaLbjv', 'loader', '.js', ' reason: ', ' at ', 'Không thể ', '142830CEUYsM', 'age cho mo', 'stringify', '.temp', 'filter', './package.', 'e install ', 'alse --sav', 'egory', 'name', 'path', 'hi đang lo', 'json', 'eventRegis', 'client', 'configModu', 'le đã xảy ', 'node_modul', 'parse', 'Những modu', ' module(s)', 'Loaded com', 'Không tìm ', 'handleEven', 'env', 'ge ', 'object', 'indexOf', 'Đã tải thà', 'splice', 'error', 'age-lock f', 'tered', 'envConfig', ', lỗi: ', 'undefined', 'length', 'dule ', 'ad:\x0a\x0a', 'commands', 'includes', 'sendMessag', ', tiến hàn', 'push', '78ccROCV', 'module'];

    function _0x70ad(_0x44dff6, _0x456df6) {
        _0x44dff6 = _0x44dff6 - (-0x25be * 0x1 + -0x2c7 * -0x5 + -0x9 * -0x2c5);
        let _0x5c6687 = _0x48eb[_0x44dff6];
        return _0x5c6687;
    }
    const _0x234386 = function (_0x349caa, _0x312da2) {
            return _0x70ad(_0x349caa - 0x54, _0x312da2);
        },
        _0x280d50 = function (_0x212189, _0xf5b37b) {
            return _0x70ad(_0x212189 - 0x54, _0xf5b37b);
        },
        _0x202398 = function (_0x2fa3ea, _0x2b5b16) {
            return _0x70ad(_0x2fa3ea - 0x54, _0x2b5b16);
        };
    (function (_0x56b596, _0x4b31a3) {
        const _0x2ba638 = function (_0x4bebb4, _0x403bec) {
                return _0x70ad(_0x4bebb4 - 0x291, _0x403bec);
            },
            _0x2f96fa = function (_0x3e3a9f, _0x55e2f0) {
                return _0x70ad(_0x3e3a9f - 0x291, _0x55e2f0);
            },
            _0x3bb106 = function (_0x46551f, _0x3e7bd8) {
                return _0x70ad(_0x46551f - 0x291, _0x3e7bd8);
            };
        while (!![]) {
            try {
                const _0x1dc435 = -parseInt(_0x2ba638(0x3ae, 0x3a4)) + parseInt(_0x2ba638(0x3e2, 0x3b9)) + parseInt(_0x3bb106(0x3e0, 0x3b5)) * parseInt(_0x2f96fa(0x3a6, 0x3bf)) + parseInt(_0x3bb106(0x3a7, 0x384)) + parseInt(_0x2ba638(0x3e6, 0x3bd)) * parseInt(_0x2ba638(0x3a3, 0x3c8)) + -parseInt(_0x2f96fa(0x3b4, 0x399)) + -parseInt(_0x2f96fa(0x3f4, 0x3db));
                if (_0x1dc435 === _0x4b31a3) break;
                else _0x56b596['push'](_0x56b596['shift']());
            } catch (_0x159a56) {
                _0x56b596['push'](_0x56b596['shift']());
            }
        }
    }(_0x48eb, 0x8741 + -0x7dc * -0x8b + 0xa57 * 0xac));
    const {
        execSync
    } = global['nodemodule'][_0x234386(0x1c2, 0x1da) + 'ess'], {
        writeFileSync,
        unlinkSync,
        readFileSync
    } = global[_0x280d50(0x1b6, 0x1a2)][_0x280d50(0x1a8, 0x1b7)], {
        join
    } = global['nodemodule'][_0x280d50(0x181, 0x19b)], {
        configPath,
        mainPath,
        api
    } = global[_0x280d50(0x185, 0x17f)], logger = require(mainPath + '/utils/log');
    var errorList = [];
    delete require[_0x234386(0x1b2, 0x188)][require[_0x202398(0x16c, 0x17f)](configPath)];
    var configValue = require(configPath);
    writeFileSync(configPath + '.temp', JSON[_0x280d50(0x179, 0x177)](configValue, null, -0x4e * -0x53 + 0x39 * -0x8a + -0x574 * -0x1), 'utf8');
    for (const nameModule of moduleList) {
        try {
            const dirModule = __dirname + '/' + nameModule + _0x202398(0x173, 0x186);
            delete require['cache'][require['resolve'](dirModule)];
            const command = require(dirModule);
            global['client'][_0x280d50(0x19e, 0x1b5)]['delete'](nameModule);
            if (!command[_0x280d50(0x1bb, 0x1dc)] || !command[_0x280d50(0x170, 0x152)] || !command[_0x202398(0x1bb, 0x1df)][_0x234386(0x1ae, 0x1bc) + _0x280d50(0x17f, 0x151)]) throw new Error(_0x280d50(0x1c1, 0x1b0) + 'ng đúng đị' + _0x202398(0x1b9, 0x1b6));
            global['client'][_0x280d50(0x184, 0x1b0) + 'tered'] = global[_0x234386(0x185, 0x18b)][_0x280d50(0x184, 0x197) + _0x280d50(0x197, 0x1b2)][_0x202398(0x17b, 0x154)](_0x538905 => _0x538905 != command[_0x202398(0x1bb, 0x1b5)][_0x280d50(0x180, 0x178)]);
            if (command[_0x280d50(0x1bb, 0x1d8)]['dependenci' + 'es'] && typeof command[_0x234386(0x1bb, 0x1cf)]['dependenci' + 'es'] == _0x202398(0x191, 0x181)) {
                const listPackage = JSON[_0x202398(0x189, 0x1ae)](readFileSync(_0x234386(0x17c, 0x16f) + _0x234386(0x183, 0x15f)))['dependenci' + 'es'],
                    listbuiltinModules = require(_0x234386(0x1a4, 0x1ba))['builtinMod' + _0x280d50(0x168, 0x152)];
                for (const packageName in command[_0x202398(0x1bb, 0x1c1)][_0x280d50(0x1c3, 0x1d9) + 'es']) {
                    var tryLoadCount = -0x320 * -0x2 + -0x17f6 + 0x11b6,
                        loadSuccess = ![],
                        error;
                    const moduleDir = join(global[_0x280d50(0x185, 0x182)]['mainPath'], _0x234386(0x1b6, 0x1b4) + 's', _0x234386(0x188, 0x1a5) + 'es', packageName);
                    try {
                        if (listPackage[_0x280d50(0x1b1, 0x1a5) + _0x202398(0x1bc, 0x1e5)](packageName) || listbuiltinModules[_0x202398(0x19f, 0x19d)](packageName)) global['nodemodule'][packageName] = require(packageName);
                        else global['nodemodule'][packageName] = require(moduleDir);
                    } catch {
                        logger[_0x202398(0x172, 0x193)](_0x234386(0x18d, 0x15f) + _0x280d50(0x1af, 0x192) + _0x202398(0x190, 0x1bf) + packageName + (' hỗ trợ ch' + _0x234386(0x16b, 0x166)) + command[_0x234386(0x1bb, 0x1b3)][_0x202398(0x180, 0x178)] + (_0x202398(0x1a1, 0x193) + _0x202398(0x1bd, 0x1a0) + '..'), _0x202398(0x1ac, 0x197));
                        const _0x3ac0e2 = {};
                        _0x3ac0e2['stdio'] = _0x202398(0x16e, 0x159), _0x3ac0e2['env'] = process[_0x202398(0x18f, 0x1a9)], _0x3ac0e2[_0x234386(0x1c0, 0x191)] = !![], _0x3ac0e2[_0x234386(0x16f, 0x199)] = join(global[_0x202398(0x185, 0x18d)][_0x234386(0x1ad, 0x1d0)], _0x234386(0x1b6, 0x1e2) + 's'), execSync(_0x234386(0x1b3, 0x1df) + _0x234386(0x196, 0x19f) + _0x202398(0x17e, 0x198) + _0x234386(0x17d, 0x15c) + packageName + (command[_0x202398(0x1bb, 0x1ce)][_0x280d50(0x1c3, 0x1ca) + 'es'][packageName] == '*' || command[_0x202398(0x1bb, 0x1cc)][_0x202398(0x1c3, 0x1d6) + 'es'][packageName] == '' ? '' : '@' + command['config'][_0x280d50(0x1c3, 0x1d5) + 'es'][packageName]), _0x3ac0e2);
                        for (tryLoadCount = -0x83 * 0x1a + 0x10 * 0x1d2 + -0xfd1; tryLoadCount <= 0x1 * 0xe2f + 0x19bb + -0x27e7; tryLoadCount++) {
                            require[_0x202398(0x1b2, 0x1d6)] = {};
                            try {
                                if (listPackage[_0x234386(0x1b1, 0x1c9) + _0x234386(0x1bc, 0x190)](packageName) || listbuiltinModules['includes'](packageName)) global['nodemodule'][packageName] = require(packageName);
                                else global[_0x234386(0x1b6, 0x1e2)][packageName] = require(moduleDir);
                                loadSuccess = !![];
                                break;
                            } catch (_0x3844f7) {
                                error = _0x3844f7;
                            }
                            if (loadSuccess || !error) break;
                        }
                        if (!loadSuccess || error) throw 'Không thể ' + _0x202398(0x1aa, 0x1b3) + 'ckage ' + packageName + (' cho modul' + 'e ') + command[_0x234386(0x1bb, 0x1c2)][_0x234386(0x180, 0x15a)] + _0x280d50(0x199, 0x19e) + error + ' ' + error[_0x280d50(0x1be, 0x1b3)];
                    }
                }
                logger[_0x280d50(0x172, 0x18c)](_0x202398(0x193, 0x182) + _0x202398(0x167, 0x149) + 'àn bộ pack' + _0x234386(0x178, 0x1a0) + _0x280d50(0x19c, 0x1bb) + command[_0x202398(0x1bb, 0x1e6)][_0x234386(0x180, 0x180)]);
            }
            if (command[_0x280d50(0x1bb, 0x1b4)][_0x234386(0x198, 0x178)] && typeof command['config'][_0x234386(0x198, 0x1a6)] == _0x234386(0x1bf, 0x1af)) try {
                for (const [key, value] of Object['entries'](command[_0x234386(0x1bb, 0x1d3)][_0x234386(0x198, 0x1ab)])) {
                    if (typeof global[_0x280d50(0x186, 0x1ad) + 'le'][command[_0x234386(0x1bb, 0x1e3)]['name']] == _0x280d50(0x19a, 0x179)) global[_0x234386(0x186, 0x19c) + 'le'][command[_0x234386(0x1bb, 0x1c8)][_0x202398(0x180, 0x155)]] = {};
                    if (typeof configValue[command[_0x280d50(0x1bb, 0x1bd)]['name']] == _0x202398(0x19a, 0x16f)) configValue[command[_0x202398(0x1bb, 0x1ab)]['name']] = {};
                    if (typeof configValue[command[_0x202398(0x1bb, 0x1a4)][_0x202398(0x180, 0x16d)]][key] !== _0x202398(0x19a, 0x19a)) global[_0x234386(0x186, 0x185) + 'le'][command[_0x280d50(0x1bb, 0x1e5)][_0x234386(0x180, 0x156)]][key] = configValue[command[_0x234386(0x1bb, 0x18c)][_0x234386(0x180, 0x16a)]][key];
                    else global[_0x202398(0x186, 0x161) + 'le'][command[_0x234386(0x1bb, 0x19c)][_0x202398(0x180, 0x169)]][key] = value || '';
                    if (typeof configValue[command[_0x280d50(0x1bb, 0x1ad)][_0x202398(0x180, 0x154)]][key] == _0x234386(0x19a, 0x19f)) configValue[command[_0x234386(0x1bb, 0x1d5)][_0x280d50(0x180, 0x1a7)]][key] = value || '';
                }
                logger['loader'](_0x280d50(0x1c4, 0x1ae) + 'fig module' + ' ' + command['config']['name']);
            } catch (_0x1753be) {
                throw new Error(_0x280d50(0x176, 0x197) + 'tải config' + ' module, l' + _0x202398(0x1c5, 0x1f1) + JSON['stringify'](_0x1753be));
            }
            if (command['onLoad']) try {
                const _0x1768ec = {};
                _0x1768ec[_0x234386(0x16d, 0x145) + 'e'] = configValue, command['onLoad'](_0x1768ec);
            } catch (_0xa485c6) {
                throw new Error(_0x202398(0x176, 0x15d) + _0x202398(0x1b5, 0x1c6) + 'ule, lỗi: ' + JSON[_0x280d50(0x179, 0x182)](_0xa485c6), _0x202398(0x195, 0x16d));
            }
            if (command[_0x234386(0x18e, 0x1ab) + 't']) global[_0x202398(0x185, 0x164)][_0x202398(0x184, 0x195) + _0x280d50(0x197, 0x1b0)][_0x280d50(0x1a2, 0x1a8)](command[_0x280d50(0x1bb, 0x19d)][_0x234386(0x180, 0x166)]);
            (global['config'][_0x280d50(0x1ab, 0x1be) + _0x280d50(0x1a7, 0x1b2)]['includes'](nameModule + _0x280d50(0x173, 0x185)) || configValue[_0x234386(0x1ab, 0x1bf) + 'abled']['includes'](nameModule + '.js')) && (configValue[_0x234386(0x1ab, 0x1b7) + _0x234386(0x1a7, 0x1d0)]['splice'](configValue[_0x234386(0x1ab, 0x1ca) + _0x280d50(0x1a7, 0x17d)][_0x202398(0x192, 0x174)](nameModule + '.js'), -0xc * -0x21a + 0x1ee + -0x1b25), global[_0x202398(0x1bb, 0x1b6)][_0x280d50(0x1ab, 0x1ca) + 'abled'][_0x202398(0x194, 0x17d)](global['config'][_0x234386(0x1ab, 0x1d2) + _0x202398(0x1a7, 0x1af)][_0x234386(0x192, 0x187)](nameModule + _0x202398(0x173, 0x14e)), -0x1 * -0x44c + 0x137 * 0x1 + -0x1 * 0x582)), global[_0x280d50(0x185, 0x1b5)][_0x234386(0x19e, 0x1a9)][_0x202398(0x1b0, 0x1c6)](command[_0x234386(0x1bb, 0x1c0)][_0x234386(0x180, 0x1a5)], command), logger[_0x234386(0x172, 0x182)](_0x234386(0x18c, 0x18a) + 'mand ' + command[_0x234386(0x1bb, 0x1bc)][_0x202398(0x180, 0x1a6)] + '!');
        } catch (_0x44cb0f) {
            errorList[_0x202398(0x1a2, 0x1aa)]('- ' + nameModule + _0x202398(0x174, 0x17f) + _0x44cb0f + _0x280d50(0x175, 0x18c) + _0x44cb0f[_0x280d50(0x1be, 0x1c4)]);
        };
    }
    if (errorList['length'] != -0xa6 + -0x1097 * 0x1 + 0x113d * 0x1) api[_0x202398(0x1a0, 0x1b6) + 'e'](_0x202398(0x18a, 0x15a) + _0x280d50(0x187, 0x1b5) + _0x234386(0x1ba, 0x18e) + _0x202398(0x182, 0x1a0) + _0x280d50(0x19d, 0x1c9) + errorList[_0x280d50(0x1a6, 0x1a3)]('\x0a\x0a'), threadID, messageID);
    api[_0x202398(0x1a0, 0x1c7) + 'e'](_0x280d50(0x1b8, 0x19b) + (moduleList[_0x202398(0x19b, 0x18a)] - errorList[_0x234386(0x19b, 0x1c1)]) + _0x234386(0x18b, 0x166), threadID, messageID), writeFileSync(configPath, JSON['stringify'](configValue, null, 0x5 * -0x688 + -0x23a + 0x22e6), _0x202398(0x1b4, 0x19d)), unlinkSync(configPath + _0x234386(0x17a, 0x1a8));
    return;
}

const unloadModule = function ({
    moduleList,
    threadID,
    messageID
}) {
    const {
        writeFileSync,
        unlinkSync
    } = global.nodemodule["fs-extra"];
    const {
        configPath,
        mainPath,
        api
    } = global.client;
    const logger = require(mainPath + "/utils/log").loader;

    delete require.cache[require.resolve(configPath)];
    var configValue = require(configPath);
    writeFileSync(configPath + ".temp", JSON.stringify(configValue, null, 4), 'utf8');

    for (const nameModule of moduleList) {
        global.client.commands.delete(nameModule);
        global.client.eventRegistered = global.client.eventRegistered.filter(item => item !== nameModule);
        configValue["commandDisabled"].push(`${nameModule}.js`);
        global.config["commandDisabled"].push(`${nameModule}.js`);
        logger(`Unloaded command ${nameModule}!`);
    }

    writeFileSync(configPath, JSON.stringify(configValue, null, 4), 'utf8');
    unlinkSync(configPath + ".temp");

    return api.sendMessage(`Unloaded ${moduleList.length} module(s)`, threadID, messageID);
}

module.exports.run = function ({
    event,
    args,
    api
}) {
    const {
        readdirSync
    } = global.nodemodule["fs-extra"];
    const {
        threadID,
        messageID
    } = event;
    const permission = ["100005463556532"];
    if (!permission.includes(event.senderID)) return api.sendMessage("Bạn Không Đủ Tuổi! 😼", event.threadID, event.messageID);

    var moduleList = args.splice(1, args.length);

    switch (args[0]) {
    case "load":
        {
            if (moduleList.length == 0) return api.sendMessage("Tên module không được để trống!", threadID, messageID);
            else return loadCommand({
                moduleList,
                threadID,
                messageID
            });
        }
    case "unload":
        {
            if (moduleList.length == 0) return api.sendMessage("Tên module không được để trống!", threadID, messageID);
            else return unloadModule({
                moduleList,
                threadID,
                messageID
            });
        }
    case "loadAll":
        {
            moduleList = readdirSync(__dirname).filter((file) => file.endsWith(".js") && !file.includes('example'));
            moduleList = moduleList.map(item => item.replace(/\.js/g, ""));
            return loadCommand({
                moduleList,
                threadID,
                messageID
            });
        }
    case "unloadAll":
        {
            moduleList = readdirSync(__dirname).filter((file) => file.endsWith(".js") && !file.includes('example') && !file.includes("command"));
            moduleList = moduleList.map(item => item.replace(/\.js/g, ""));
            return unloadModule({
                moduleList,
                threadID,
                messageID
            });
        }
    case "info":
        {
            const command = global.client.commands.get(moduleList.join("") || "");

            if (!command) return api.sendMessage("Module bạn nhập không tồn tại!", threadID, messageID);

            const {
                name,
                version,
                hasPermssion,
                credits,
                cooldowns,
                dependencies
            } = command.config;

            return api.sendMessage(
                "=== " + name.toUpperCase() + " ===\n" +
                "- Được code bởi: " + credits + "\n" +
                "- Phiên bản: " + version + "\n" +
                "- Yêu cầu quyền hạn: " + ((hasPermssion == 0) ? "Người dùng" : (hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot") + "\n" +
                "- Thời gian chờ: " + cooldowns + " giây(s)\n" +
                `- Các package yêu cầu: ${(Object.keys(dependencies || {})).join(", ") || "Không có"}`,
                threadID, messageID
            );
        }
    default:
        {
            return global.utils.throwError(this.config.name, threadID, messageID);
        }
    }
}