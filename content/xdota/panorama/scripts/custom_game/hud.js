// Generated by TypeScript
function Component(name, path) {
    var hud = $("#ZooHUD");
    var panel = $.CreatePanel("Panel", hud, name);
    panel.LoadLayoutAsync("file://{resources}/layout/custom_game/" + path, false, false);
    $.Msg("Adding component ", name);
}
(function () {
    // Force reload
    var hud = $("#ZooHUD");
    hud.RemoveAndDeleteChildren();
    $.Msg("reloading");
    GameUI.CustomUIConfig().itemdef = {
        587: "default",
        10137: "diretide",
        10149: "radiant",
        10150: "dire",
        10151: "winter",
        10173: "cold_depths",
        10176: "empower",
        10177: "crystal_wings",
        10179: "frozen_touch",
        10180: "menace",
        10181: "nature",
        10182: "driftwood",
        10183: "gear_tooth",
        10186: "premier_league",
        10187: "starladder",
        10190: "ti3",
        10198: "dark_forest",
        10201: "jungle_ruin",
        10203: "ferocious",
        10299: "iron_cage",
        10305: "eswc_diamond",
        10306: "curiosity_hud",
        10309: "dragon_scale",
        10317: "underwater",
        10322: "weplay",
        10324: "portal",
        10327: "golden_treasures",
        10333: "quake",
        10336: "od",
        10342: "steelseries_bamboo",
        10343: "necropolis",
        10346: "mana_pool",
        10356: "stronghold",
        10364: "familiar_woods",
        10385: "reign_of_maelrawn_hud_-_fgcl",
        10392: "thunder_spirit",
        10393: "timber_fury",
        10399: "esp_surge_hud",
        10420: "spirit_stones",
        10421: "temple_wall",
        10422: "three_virtues",
        10426: "free_to_play",
        10429: "royal_crypt_hud",
        10436: "radiantentity",
        10437: "jollyroger",
        10438: "crystalmana",
        10439: "antiquity",
        10453: "hud_springessence",
        10459: "green_ural",
        10467: "hud_sandsofluxor",
        10472: "undying_hud",
        10480: "day_night",
        10484: "sacredmemories_hud",
        10485: "techlabs2014",
        10489: "eslbrazil_hud",
        10490: "force_of_spirit",
        10492: "black_monolith",
        10493: "esl_one_hud_fortress",
        10494: "hellfire",
        10522: "alliance",
        10523: "ti4",
        10586: "livingindarkness",
        10689: "redwarrior_hud",
        10722: "brewery",
        10730: "team_empire_hud",
        10751: "evil_genius_hud",
        10755: "titan_hud",
        10832: "bts_summit",
        10836: "detonation",
        10848: "sltvx",
        10876: "dc_dayhud",
        10879: "demonichud",
        10887: "bane_delirium",
        10903: "brawl_basher",
        10929: "dancing_butterfly_loading_screen",
        10957: "zodiac_hud",
        10971: "ghostly_silence",
        10973: "guardian_angel",
        10974: "iron_thorn",
        10975: "tarantula",
        11106: "dotapit_s3_hud",
        11137: "dac_2015",
        11163: "d2cls5_hud",
        11186: "bts3_hud",
        11197: "donbass_cup_hud",
        11335: "vici_gaming",
        11349: "the_international_2015",
        11370: "virtus_pro",
        11406: "fireborn_hud",
        11544: "the_international_2016"
    };
})();
