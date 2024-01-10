var app = angular.module('Murgo', []);

app.controller("Inventory", function($scope){
    $scope.cards = [
        {
            "expansion": "Innistrad Crimson Vow",
            "set": "VOW",
            "released" : "11.2021",
            "cards" : [
                { "name": "Adamant Will", "collector": "001/277", "rarity": "C", "color": "white", "type": "Instant", "url": "b/d/bd091f3e-5fcc-4d12-b0c3-3b6340ab01d8" },
                { "name": "Angelic Quartermaster", "collector": "002/277", "rarity": "U", "color": "white", "type": "Creature — Angel Soldier", "url": "4/1/41d81b88-c19b-4148-89ba-ae8fb53843e1" },
                { "name": "Cemetery Protector", "collector": "006/277", "rarity": "M", "color": "white", "type": "Creature — Human Soldier", "url": "c/0/c00731eb-69fe-42f3-9919-66a4cdec00f7" },
                { "name": "Circle of Confinement", "collector": "007/277", "rarity": "U", "color": "white", "type": "Enchantment", "url": "1/3/13031fb6-9d5a-4add-9a86-28b2a9373fd2" },
                { "name": "Dawnhart Geist", "collector": "008/277", "rarity": "U", "color": "white", "type": "Creature — Spirit Warlock", "url": "a/1/a1d27617-2d3d-44a1-b93f-0694253b6774" },
                { "name": "Drogskol Infantry", "collector": "010/277", "rarity": "C", "color": "white", "type": "Creature — Spirit Soldier", "url": "f/8/f88e269e-ff3d-4775-8520-5b7a6dddf23d",
                "transform": { "name": "Drogskol Armaments", "type": "Enchantment — Aura" } },
                { "name": "Estwald Shieldbasher", "collector": "011/277", "rarity": "C", "color": "white", "type": "Creature — Human Soldier", "url": "6/1/61c7d889-8cc0-4e80-b6d5-d41961820224" },
                { "name": "Fierce Retribuition", "collector": "013/277", "rarity": "C", "color": "white", "type": "Instant", "url": "9/5/9597b163-5c6b-4f64-b1f1-5f1fa2e23e5d" },
                { "name": "Fleeting Spirit", "collector": "014/277", "rarity": "U", "color": "white", "type": "Creature — Spirit", "url": "d/b/db9d80f7-9742-4437-a9f4-6717a678f935" },
                { "name": "Gryff Rider", "collector": "015/277", "rarity": "C", "color": "white", "type": "Creature — Human Knight", "url": "5/3/5317077b-370e-41a9-9162-c713362fd7f4" },
                { "name": "Heron of Hope", "collector": "018/277", "rarity": "C", "color": "white", "type": "Creature — Bird", "url": "f/a/fa7e6933-5c64-4fcd-bb7f-740767a149cb" },
                { "name": "Heron-Blessed Geist", "collector": "019/277", "rarity": "C", "color": "white", "type": "Creature — Spirit", "url": "8/3/83bacf4a-4e99-4008-97e4-3a82dddd4e45" },
                { "name": "Kindly Ancestor", "collector": "022/277", "rarity": "C", "color": "white", "type": "Creature — Spirit", "url": "2/5/25193485-7f41-4b05-9a69-4c112679f97c",
                "transform": { "name": "Ancestor's Embrace", "type": "Enchantment — Aura" } },
                { "name": "Lantern Flare", "collector": "023/277", "rarity": "R", "color": "white", "type": "Instant", "url": "d/f/dfd59300-7b5c-4263-a7fd-775c9fcb05ad" },
                { "name": "Militia Rallier", "collector": "024/277", "rarity": "C", "color": "white", "type": "Creature — Human Soldier", "url": "5/1/51b3ff40-3185-4369-985e-17613bb6ad22" },
                { "name": "Nebelgast Beguiler", "collector": "025/277", "rarity": "C", "color": "white", "type": "Creature — Spirit", "url": "0/4/04c68dbd-e61b-49a7-aa17-da6b26c9fd29" },
                { "name": "Nurturing Presence", "collector": "026/277", "rarity": "C", "color": "white", "type": "Enchantment — Aura", "url": "3/5/35e109ea-8b86-4432-b15e-5a6201caf2aa" },
                { "name": "Parish-Blade Trainee", "collector": "029/277", "rarity": "C", "color": "white", "type": "Creature — Human Soldier", "url": "9/8/9845cdf2-e5ba-44a0-8136-72a1eb03a6a1" },
                { "name": "Piercing Light", "collector": "030/277", "rarity": "C", "color": "white", "type": "Instant", "url": "5/4/54cc4e2b-1497-4788-afb4-9e42b7683b5a" },
                { "name": "Radiant Grace", "collector": "031/277", "rarity": "U", "color": "white", "type": "Enchantment — Aura", "url": "4/a/4a708243-42a1-4fa7-8b0b-9d5163da84bb",
                "transform": { "name": "Radiant Restraints", "type": "Enchantment — Aura Curse" } },
                { "name": "Resistance Squad", "collector": "032/277", "rarity": "U", "color": "white", "type": "Creature — Human Soldier", "url": "0/9/093ae747-350f-4253-b903-8c6892d78c83" },
                { "name": "Sanctify", "collector": "033/277", "rarity": "C", "color": "white", "type": "Sorcery", "url": "8/8/880e071a-6d6c-41c4-b2eb-c9e6626d0c7f" },
                { "name": "Savior of Ollenbock", "collector": "034/277", "rarity": "M", "color": "white", "type": "Creature — Human Soldier", "url": "b/a/ba77e83b-1846-4c42-bea0-2e304429fbe0" },
                { "name": "Sigarda's Imprisonment", "collector": "035/277", "rarity": "C", "color": "white", "type": "Enchantment — Aura", "url": "1/1/118995a6-8471-47ac-9404-700ce7fc46f6" },
                { "name": "Traveling Minister", "collector": "039/277", "rarity": "C", "color": "white", "type": "Creature — Human Cleric", "url": "e/6/e672a05c-5f1a-4aa6-9398-e33df01c7c96" },
                { "name": "Twinblade Gueist", "collector": "040/277", "rarity": "U", "color": "white", "type": "Creature — Spirit Warrior", "url": "f/1/f1deb24b-3d8f-4251-a901-85eeb891f26f",
                "transform": { "name": "Twinblade Invocation", "type": "Enchantment — Aura" } },
                { "name": "Unholy Officiant", "collector": "041/277", "rarity": "C", "color": "white", "type": "Creature — Vampire Cleric", "url": "8/a/8a4c04a4-e68b-4d3d-89c8-29cdaaac36b2" },
                { "name": "Vampire Slayer", "collector": "043/277", "rarity": "C", "color": "white", "type": "Creature — Human Soldier", "url": "a/8/a8f6f03b-5a4e-4532-9c9e-24c75df2769f" },
                { "name": "Wedding Announcement", "collector": "045/277", "rarity": "R", "color": "white", "type": "Enchantment", "url": "2/c/2c3ddb1f-a1de-4fea-9042-5e9caa16ceb2",
                "transform": { "name": "Wedding Festivity", "type": "Enchantment" } },

                { "name": "Alchemist's Retrieval", "collector": "047/277", "rarity": "C", "color": "blue", "type": "Instant", "url": "e/d/edbf9d4f-6027-40b8-81c1-7f001a9119dd" },
                { "name": "Binding Geist", "collector": "048/27", "rarity": "C", "color": "blue", "type": "Creature — Spirit", "url": "7/3/730e4629-dc54-415d-9493-88885788ca19",
                "transform": { "name": "Spectral Binding", "type": "Enchantment — Aura" } },
                { "name": "Biolume Egg", "collector": "049/277", "rarity": "U", "color": "blue", "type": "Creature — Serpent Egg", "url": "5/7/57039230-bf5a-4489-9dc1-37e27b17bd84",
                "transform": { "name": "Biolume Serpent", "type": "Creature — Serpent" } },
                { "name": "Cemetery Illuminator", "collector": "050/277", "rarity": "M", "color": "blue", "type": "Creature — Spirit", "url": "5/f/5f619464-dc3b-4265-b4e4-2578034bf5bf" },
                { "name": "Chill of the Grave", "collector": "051/277", "rarity": "C", "color": "blue", "type": "Instant", "url": "6/0/60222e91-a688-4113-a8c2-ab08f52bb6e1" },
                { "name": "Cradle of Safety", "collector": "054/277", "rarity": "C", "color": "blue", "type": "Enchantment — Aura", "url": "4/2/42cbad81-152a-435f-9289-f4b6483a059b" },
                { "name": "Cruel Witness", "collector": "055/277", "rarity": "C", "color": "blue", "type": "Creature — Bird Horror", "url": "5/b/5bf2c686-efb0-46c7-b34e-c77987914b96" },
                { "name": "Dreadlight Monstrosity", "collector": "057/277", "rarity": "C", "color": "blue", "type": "Creature — Crab Horror", "url": "1/6/16345278-7565-406b-a958-835081082bc8" },
                { "name": "Fear of Death", "collector": "059/277", "rarity": "C", "color": "blue", "type": "Enchantment — Aura", "url": "b/8/b81704d2-d555-4894-b36c-6b65d1ebe681" },
                { "name": "Hullbraker Horror", "collector": "063/277", "rarity": "R", "color": "blue", "type": "Creature — Kraken Horror", "url": "b/f/bf786c50-1ba1-4f81-a800-bc98189040dd" },
                { "name": "Geralf, Visionary Stitcher", "collector": "061/277", "rarity": "R", "color": "blue", "type": "Legendary Creature — Human Wizard", "url": "6/9/69890076-9cc4-434f-8618-63b00fdf4515" },
                { "name": "Inspired Idea", "collector": "064/277", "rarity": "R", "color": "blue", "type": "Sorcery", "url": "2/f/2fe4ee8e-579d-4bfa-8c19-bfdb1c0b7177" },
                { "name": "Lantern Bearer", "collector": "066/277", "rarity": "C", "color": "blue", "type": "Creature — Spirit", "url": "a/4/a4d3652a-6774-4b16-aa8b-cb11d72ec7aa",
                "transform": { "name": "Lanterns' Lift", "type": "Enchantment — Aura" } },
                { "name": "Lunar Rejection", "collector": "067/277", "rarity": "U", "color": "blue", "type": "Instant", "url": "0/f/0f66511c-355f-4e8a-96fc-3afc7a315231" },
                { "name": "Mischievous Catgeist", "collector": "069/277", "rarity": "U", "color": "blue", "type": "Creature — Cat Spirit", "url": "a/3/a3ff628a-ef8e-45c4-84e7-a33ec28f025a",
                "transform": { "name": "Catlike Curiosity", "type": "Enchantment — Aura" } },
                { "name": "Repository Skaab", "collector": "073/277", "rarity": "C", "color": "blue", "type": "Creature — Zombie", "url": "7/c/7cc22c2a-535a-46b5-817c-da5850abd669" },
                { "name": "Scattered Thoughts", "collector": "074/277", "rarity": "C", "color": "blue", "type": "Instant", "url": "d/c/dc5c6675-6e0f-427d-9399-a6e7fc6215f1" },
                { "name": "Screaming Swarn", "collector": "075/277", "rarity": "U", "color": "blue", "type": "Creature — Bird Horror", "url": "3/c/3c9faf98-11bb-4407-aec9-d0d43dbaba34" },
                { "name": "Selhoff Entomber", "collector": "076/277", "rarity": "C", "color": "blue", "type": "Creature — Zombie", "url": "f/8/f8805db2-5a26-43cf-9b74-f882c283e5e4" },
                { "name": "Serpentine Ambush", "collector": "077/277", "rarity": "C", "color": "blue", "type": "Instant", "url": "b/8/b8214b1c-29f8-4986-89ac-2d7fc929edf3" },
                { "name": "Skywarp Skaab", "collector": "078/277", "rarity": "C", "color": "blue", "type": "Creature — Zombie Drake", "url": "7/3/73168804-3c22-4fcb-907a-2f08999c0cea" },
                { "name": "Soulcipher Board", "collector": "079/277", "rarity": "U", "color": "blue", "type": "Artifact", "url": "3/c/3c0fae23-1278-499f-9df7-4a29691726b1" },
                { "name": "Steelclad Spirit", "collector": "080/277", "rarity": "C", "color": "blue", "type": "Creature — Spirit", "url": "5/5/55fb1426-5a6f-48dd-938b-c64b1a28ee59" },
                { "name": "Stitched Assistant", "collector": "081/277", "rarity": "C", "color": "blue", "type": "Creature — Zombie", "url": "c/1/c1debb8c-d5e0-49e5-ab27-2d50e6f9d8d2" },
                { "name": "Stormchaser Drake", "collector": "082/277", "rarity": "U", "color": "blue", "type": "Creature — Drake", "url": "3/d/3dd5c860-9d27-40d9-af38-aaf40bd52423" },
                { "name": "Syncopate", "collector": "083/277", "rarity": "C", "color": "blue", "type": "Instant", "url": "0/8/08375017-4432-4296-9799-966db145ed7c" },
                { "name": "Thirst for Discovery", "collector": "085/277", "rarity": "U", "color": "blue", "type": "Instant", "url": "1/e/1ea179e9-9c0d-46c1-9ee8-60be68e1f79c" },
                { "name": "Wanderlight Spirit", "collector": "086/277", "rarity": "C", "color": "blue", "type": "Creature — Spirit", "url": "7/b/7bb3ce5d-330d-427e-a053-8cc4eeb2941b" },
                { "name": "Whispering Wizard", "collector": "088/277", "rarity": "U", "color": "blue", "type": "Creature — Human Wizard", "url": "5/4/54fb422d-71f2-44ed-9589-32630ab87050" },
                { "name": "Witness the Future", "collector": "090/277", "rarity": "U", "color": "blue", "type": "Sorcery", "url": "d/0/d0b3683f-a68b-458c-8f70-bba0f8779b8a" },
                { "name": "Wretched Throng", "collector": "091/277", "rarity": "C", "color": "blue", "type": "Creature — Zombie Horror", "url": "e/b/eb3991f0-76b8-4f77-9d67-0e2b11fda750" },
                
                { "name": "Aim for the Head", "collector": "092/277", "rarity": "C", "color": "black", "type": "Sorcery", "url": "1/1/1174e8e1-2e8e-4070-9871-7d5d93e0dd56" },                
                { "name": "Bleed Dry", "collector": "094/277", "rarity": "C", "color": "black", "type": "Instant", "url": "3/d/3db65755-f104-4de9-bcc9-0a4a7bc66b51" },
                { "name": "Blood Fountain", "collector": "095/277", "rarity": "C", "color": "black", "type": "Artifact", "url": "d/d/dd03651e-ada0-41dc-8722-0eba476943e3" },
                { "name": "Bloodcrazed Socialite", "collector": "096/277", "rarity": "C", "color": "black", "type": "Creature — Vampire", "url": "8/b/8b12c378-1103-4a50-88fa-cf5a2deef463" },
                { "name": "Bloodsworn Squire", "collector": "097/277", "rarity": "U", "color": "black", "type": "Creature — Vampire Soldier", "url": "a/7/a7cbdd54-7685-4921-ab60-dc36e647a4c5",
                "transform": { "name": "Bloodsworn Knight", "type": "Creature — Vampire Knight" } },
                { "name": "Bloodvial Purveyor", "collector": "098/277", "rarity": "R", "color": "black", "type": "Creature — Vampire", "url": "4/8/4889c58b-8b84-42af-a56c-e886655aa997" },
                { "name": "Catapult Fodder", "collector": "099/277", "rarity": "U", "color": "black", "type": "Creature — Zombie", "url": "e/6/e61b3afa-66e0-4f7b-84bc-7ae2cc6d28d4",
                "transform": { "name": "Catapult Captain", "type": "Creature — Zombie" } },
                { "name": "Cemetery Desecrator", "collector": "100/277", "rarity": "M", "color": "black", "type": "Creature — Zombie", "url": "4/8/48da33b1-d59c-43f1-8e55-480096b674e5" },
                { "name": "Desperate Farmer", "collector": "104/277", "rarity": "C", "color": "black", "type": "Creature — Human Peasant", "url": "4/6/467c566e-7f6a-40c9-8fd7-da6ae96df56c",
                "transform": { "name": "Depraved Harvester", "type": "Creature — Human Knight" } },
                { "name": "Diregraf Scavenger", "collector": "105/277", "rarity": "C", "color": "black", "type": "Creature — Zombie Bear", "url": "f/7/f72eb127-3f4c-42ed-8ba6-b6d83ea18545" },
                { "name": "Doomed Dissenter", "collector": "106/277", "rarity": "C", "color": "black", "type": "Creature — Human", "url": "f/7/f7c0cf16-81ea-45e3-99cc-4424d59bb44b" },
                { "name": "Dread Fugue", "collector": "107/277", "rarity": "U", "color": "black", "type": "Sorcery", "url": "0/a/0ad4c472-b8ce-4ae0-a6f0-726ea74722c5" },
                { "name": "Edgar's Awakening", "collector": "110/277", "rarity": "U", "color": "black", "type": "Sorcery", "url": "9/6/96ff9de6-f9ae-4b1c-9fd1-4ba9663922af" },
                { "name": "Fell Stinger", "collector": "112/277", "rarity": "C", "color": "black", "type": "Creature — Zombie Scorpion", "url": "2/7/27347849-6c07-42c0-bee4-74f93d7ad511" },
                { "name": "Gift of Fangs", "collector": "113/277", "rarity": "C", "color": "black", "type": "Enchantment — Aura", "url": "a/8/a864375f-99c3-4c68-9440-bc25ff6d0dc0" },
                { "name": "Grisly Ritual", "collector": "116/277", "rarity": "C", "color": "black", "type": "Sorcery", "url": "5/3/53cdf2ab-3acd-49bd-8273-84c1cfc92883" },
                { "name": "Groom's Finery", "collector": "117/277", "rarity": "U", "color": "black", "type": "Artifact — Equipment", "url": "4/3/43bc65cf-4444-4db3-9bb3-a7d91e560470" },
                { "name": "Mindleech Ghoul", "collector": "122/277", "rarity": "C", "color": "black", "type": "Creature — Zombie", "url": "f/5/f5c4e00d-128a-4ddb-9e1b-3ee93121b262" },
                { "name": "Parasitic Grasp", "collector": "123/277", "rarity": "U", "color": "black", "type": "Instant", "url": "0/7/0713adf7-1770-4d5b-80f7-d6cbd24f7890" },
                { "name": "Persistent Specimen", "collector": "125/277", "rarity": "C", "color": "black", "type": "Creature — Skeleton", "url": "f/7/f7baf973-3202-4fea-8861-a4a5ec228640" },
                { "name": "Ragged Recluse", "collector": "127/277", "rarity": "C", "color": "black", "type": "Creature — Human Peasant", "url": "7/f/7fb728de-0d6e-4b32-b0c4-edd7382d1391",
                "transform": { "name": "Odious Witch", "type": "Creature — Human Warlock" } },
                { "name": "Restless Bloodseeker", "collector": "128/277", "rarity": "U", "color": "black", "type": "Creature — Vampire", "url": "7/1/71f67ac0-7901-4248-9cb7-2200fb8f893e",
                "transform": { "name": "Bloodsoaked Reveler", "type": "Creature — Vampire" } },
                { "name": "Rot-Tide Gargantua", "collector": "129/277", "rarity": "C", "color": "black", "type": "Creature — Zombie Kraken", "url": "1/e/1eafefd0-3a9e-400e-8c75-0825aeb2ded1" },
                { "name": "Skulking Killer", "collector": "130/277", "rarity": "U", "color": "black", "type": "Creature — Vampire Assassin", "url": "4/9/497b94b9-c5d7-4e94-87c2-ca1342588d79" },
                { "name": "Undead Butler", "collector": "133/277", "rarity": "U", "color": "black", "type": "Creature — Zombie", "url": "2/c/2c9b8582-8887-4652-82e2-f9b11ee21545" },
                { "name": "Undying Malice", "collector": "134/277", "rarity": "C", "color": "black", "type": "Instant", "url": "8/e/8eb38041-043a-4b18-9d9a-f1283684e8f1" },
                { "name": "Unhallowed Phalanx", "collector": "135/277", "rarity": "C", "color": "black", "type": "Creature — Zombie Soldier", "url": "d/5/d5ec541b-1799-4c0e-a3fb-c008cf2eb911" },
                { "name": "Vampire's Kiss", "collector": "136/277", "rarity": "C", "color": "black", "type": "Sorcery", "url": "9/7/974bf8cc-4259-48cc-8e7f-1580bb010d3f" },

                { "name": "Abrade", "collector": "139/277", "rarity": "C", "color": "red", "type": "Instant", "url": "a/0/a0e47d11-cb21-402b-a39e-588a94cc57b4" },
                { "name": "Alluring Suitor", "collector": "141/277", "rarity": "U", "color": "red", "type": "Creature — Vampire", "url": "3/9/397ffd01-c090-4233-9f5a-5f765886d498",
                "transform": { "name": "Deadly Dancer", "type": "Creature — Vampire" } },
                { "name": "Belligerent Guest", "collector": "144/277", "rarity": "C", "color": "red", "type": "Creature — Vampire", "url": "1/b/1bb844c4-f41c-4411-a80a-c19e1d97b272" },
                { "name": "Blood Petal Celebrant", "collector": "146/277", "rarity": "C", "color": "red", "type": "Creature — Vampire", "url": "0/c/0c3a4927-f06c-424d-92a9-b40cf8e3e209" },
                { "name": "Bloody Betrayal", "collector": "147/277", "rarity": "C", "color": "red", "type": "Sorcery", "url": "8/9/8970a5d6-dcab-415a-851b-20e228ef7d16" },
                { "name": "Cemetery Gatekeeper", "collector": "148/277", "rarity": "M", "color": "red", "type": "Creature — Vampire", "url": "4/5/457086c4-1b4e-4f79-8f2a-10b16174c8bb" },
                { "name": "Change of Fortune", "collector": "150/277", "rarity": "R", "color": "red", "type": "Sorcery", "url": "6/3/63ca5ce5-94e7-43a1-8f2b-f0a4532f617a" },
                { "name": "Daybreak Combatants", "collector": "153/277", "rarity": "C", "color": "red", "type": "Creature — Human Warrior", "url": "8/6/8697a861-0f67-4ed3-bed8-f264fc78565e" },
                { "name": "End the Festivities", "collector": "155/277", "rarity": "C", "color": "red", "type": "Sorcery", "url": "b/e/bec748e6-7245-4a71-aeee-cefed8346948" },
                { "name": "Falkenrath Celebrants", "collector": "156/277", "rarity": "C", "color": "red", "type": "Creature — Vampire", "url": "4/c/4c3c5778-4760-4a8c-8d8d-693e29a0a74b" },
                { "name": "Flame-Blessed Bolt", "collector": "158/277", "rarity": "C", "color": "red", "type": "Instant", "url": "b/1/b1771a8f-7bea-4bb0-9949-566ee6613b93" },
                { "name": "Hungry Ridgewolf", "collector": "161/277", "rarity": "C", "color": "red", "type": "Creature — Wolf", "url": "8/0/804e0e1d-9c9c-46e6-8533-88e18a91ceff" },
                { "name": "Kessig Flamebreather", "collector": "164/277", "rarity": "C", "color": "red", "type": "Creature — Human Shaman", "url": "3/0/303ad78a-b02a-44dc-afe6-7f95781a5062" },
                { "name": "Lacerate Flesh", "collector": "166/277", "rarity": "C", "color": "red", "type": "Sorcery", "url": "c/7/c7e0c0dc-2d35-4e5a-81da-dd5f35b8e579" },
                { "name": "Lambholt Raconteur", "collector": "167/277", "rarity": "U", "color": "red", "type": "Creature — Human Werewolf", "url": "0/c/0cbee24c-9147-46cb-a5f9-8d919c021aa4",
                "transform": { "name": "Lambholt Ravager", "type": "Creature — Werewolf" } },
                { "name": "Manaform Hellkite", "collector": "170/277", "rarity": "M", "color": "red", "type": "Creature — Dragon", "url": "5/2/52e59170-aa80-45e1-ad0d-ce4818e78d2a" },
                { "name": "Markov Retribuition", "collector": "171/277", "rarity": "U", "color": "red", "type": "Sorcery", "url": "4/8/48d3840c-db27-4512-bfe3-92249094e5b4" },
                { "name": "Pyre Spawn", "collector": "173/277", "rarity": "C", "color": "red", "type": "Creature — Elemental", "url": "8/0/80255777-de00-4ffa-a8a0-f522bf4198fb" },
                { "name": "Reckless Impulse", "collector": "174/277", "rarity": "C", "color": "red", "type": "Sorvery", "url": "6/9/6943c07f-ab0d-4f5a-bbe9-c0a83dc98546" },
                { "name": "Rending Flame", "collector": "175/277", "rarity": "U", "color": "red", "type": "Sorvery", "url": "5/1/51332c31-41df-4379-aa63-6a734a4df618" },
                { "name": "Runebound Wolf", "collector": "176/277", "rarity": "U", "color": "red", "type": "Creature — Wolf", "url": "6/f/6f9615f0-376f-4ac0-b269-5f497f2b5223" },
                { "name": "Sure Strike", "collector": "179/277", "rarity": "C", "color": "red", "type": "Instant", "url": "1/d/1d872736-fafb-44e8-a809-48c5436c665a" },
                { "name": "Voldaren Epicure", "collector": "182/277", "rarity": "C", "color": "red", "type": "Creature — Vampire", "url": "a/e/ae154e64-f626-45fb-bd52-840c1c27b2d3" },
                { "name": "Weary Prisoner", "collector": "184/277", "rarity": "C", "color": "red", "type": "Creature — Human Werewolf", "url": "e/6/e641467b-ac2e-4d29-aed7-5cc227c3b1ce",
                "transform": { "name": "Wrathful Jailbreaker", "type": "Creature — Werewolf" } },

                { "name": "Apprentice Sharpshooter", "collector": "185/277", "rarity": "C", "color": "green", "type": "Creature — Human Archer", "url": "f/0/f03f0790-cdc9-4bb4-ae54-2c248435b0a4" },
                { "name": "Ascendant Packleader", "collector": "186/277", "rarity": "R", "color": "green", "type": "Creature — Wolf", "url": "1/4/142c5b67-5de9-41da-b57f-7ce771457a3e" },
                { "name": "Avabruck Caretaker", "collector": "187/277", "rarity": "M", "color": "green", "type": "Creature — Human Werewolf", "url": "c/0/c0c358b4-5af2-438f-8bd5-beb0ee6b518b",
                "transform": { "name": "Hollowhenge Huntmaster", "type": "Creature — Werewolf" } },
                { "name": "Bramble Wurm", "collector": "189/277", "rarity": "U", "color": "green", "type": "Creature — Wurm", "url": "8/f/8f16f137-4ceb-469c-a381-e575d58f456b" },
                { "name": "Cartographer's Survey", "collector": "190/277", "rarity": "U", "color": "green", "type": "Sorcery", "url": "b/9/b9a41cfc-f329-4e69-a785-835f69c7d2ba" },
                { "name": "Cemetery Prowler", "collector": "191/277", "rarity": "M", "color": "green", "type": "Creature — Wolf", "url": "b/1/b124ccc4-76e3-41a4-92b2-8f1d06ea9cb8" },
                { "name": "Crushing Canopy", "collector": "194/277", "rarity": "C", "color": "green", "type": "Instant", "url": "e/a/eae67d98-5167-442b-8586-0b2bcb0c56eb" },
                { "name": "Dawnhart Disciple", "collector": "196/277", "rarity": "C", "color": "green", "type": "Creature — Human Warlock", "url": "c/4/c4bb669c-155e-4002-ba55-7e901760c0e8" },
                { "name": "Dig Up", "collector": "197/277", "rarity": "R", "color": "green", "type": "Sorcery", "url": "8/f/8f14c947-2452-4fd6-8f1a-391cf5898100" },
                { "name": "Flourishing Hunter", "collector": "199/277", "rarity": "C", "color": "green", "type": "Creature — Wolf Spirit", "url": "2/a/2abc54df-773d-4f46-b241-e1f42af8ab95" },
                { "name": "Hookhand Mariner", "collector": "203/277", "rarity": "C", "color": "green", "type": "Creature — Human Werewolf", "url": "5/4/54a4b031-0919-44aa-a35e-68da7a27235a",
                "transform": { "name": "Riphook Raider", "type": "Creature — Werewolf" } },
                { "name": "Massive Might", "collector": "208/277", "rarity": "C", "color": "green", "type": "Instant", "url": "3/a/3a5cd50b-4825-4d85-b0f9-e2a51d2a7df1" },
                { "name": "Moldgraf Millipede", "collector": "209/277", "rarity": "C", "color": "green", "type": "Creature — Insect Horror", "url": "5/2/5252ea27-63d1-4b80-beae-8e016373d004" },
                { "name": "Mulch", "collector": "210/277", "rarity": "C", "color": "green", "type": "Sorcery", "url": "9/5/950dd57e-b2e1-4a27-a212-86fbfdbf914d" },
                { "name": "Nature's Embrace", "collector": "211/277", "rarity": "C", "color": "green", "type": "Enchantment — Aura", "url": "3/9/39d757af-86fd-4f99-a09a-0f3898ed95f6" },
                { "name": "Oakshade Stalker", "collector": "212/277", "rarity": "U", "color": "green", "type": "Creature — Human Ranger Werewolf", "url": "8/b/8bcaa944-4e45-457c-be9c-07377b6ed08b",
                "transform": { "name": "Moonlit Ambusher", "type": "Creature — Werewolf" } },
                { "name": "Reclusive Taxidermist", "collector": "214/277", "rarity": "U", "color": "green", "type": "Creature — Human Druid", "url": "1/0/10edf37a-ee35-491d-b83a-39035f7df65a" },
                { "name": "Sawblade Slinger", "collector": "217/277", "rarity": "U", "color": "green", "type": "Creature — Human Archer", "url": "2/2/225773f9-1843-4ee0-8564-8e4a5dfef775" },
                { "name": "Snarling Wolf", "collector": "219/277", "rarity": "C", "color": "green", "type": "Creature — Wolf", "url": "e/c/ecd271d7-a3c8-4448-b8e2-bcef5d7e9118" },
                { "name": "Spiked Ripsaw", "collector": "220/277", "rarity": "U", "color": "green", "type": "Artifact — Equipment", "url": "2/4/241e95ec-b630-4492-be1d-f66aa19889e5" },
                { "name": "Spore Crawler", "collector": "222/277", "rarity": "C", "color": "green", "type": "Creature — Fungus", "url": "6/2/628dbc4c-3640-44a9-8439-873103989409" },
                { "name": "Sporeback Wolf", "collector": "223/277", "rarity": "C", "color": "green", "type": "Creature — Wolf", "url": "3/f/3fb04879-9348-4d4f-9a23-c82fd99d04c6" },
                { "name": "Weaver of Blossoms", "collector": "226/277", "rarity": "C", "color": "green", "type": "Creature — Human Werewolf", "url": "7/3/73bf2a0a-b97d-4b90-abd6-d1755734ea15",
                "transform": { "name": "Blossom-Clad Werewolf", "type": "Creature — Werewolf" } },
                { "name": "Witch's Web", "collector": "227/277", "rarity": "C", "color": "green", "type": "Instant", "url": "0/d/0d021207-76be-4bc9-bb71-df991a04d8d8" },
                { "name": "Wolf Strike", "collector": "228/277", "rarity": "C", "color": "green", "type": "Instant", "url": "0/2/02e9cd00-7ffd-44e1-aa0f-c94489ff4a0f" },
                { "name": "Wolfkin Outcast", "collector": "229/277", "rarity": "U", "color": "green", "type": "Creature — Human Werewolf", "url": "7/a/7a743426-6333-4ca6-9207-163b325ba435",
                "transform": { "name": "Wedding Crasher", "type": "Creature — Werewolf" } },
                
                { "name": "Bloodtithe Harvester", "collector": "232/277", "rarity": "U", "color": "multi", "type": "Creature — Vampire", "url": "f/0/f0192cf7-3391-4720-b9c8-72dec5dde01e" },
                { "name": "Markov Waltzer", "collector": "242/277", "rarity": "U", "color": "multi", "type": "Creature — Vampire", "url": "c/2/c2f45bc0-36ed-44ec-9bc8-31ea7c7fafdb" },
                { "name": "Odric, Blood-Cursed", "collector": "243/277", "rarity": "R", "color": "multi", "type": "Legendary Creature — Vampire Soldier", "url": "8/1/81a79f5f-a65a-4b43-b58c-cdfa09cc7855" },
                { "name": "Eruth, Tormented Prophet", "collector": "237/277", "rarity": "R", "color": "multi", "type": "Legendary Creature — Human Wizard", "url": "9/f/9f764077-df2d-4ac7-b507-2c8e08386d49" },
                { "name": "Skull Skaab", "collector": "248/277", "rarity": "U", "color": "multi", "type": "Creature — Zombie", "url": "2/6/268fd7e7-0105-4c39-a3ea-77ed32214ff3" },
                { "name": "Vilespawn Spider", "collector": "250/277", "rarity": "U", "color": "multi", "type": "Creature — Spider", "url": "6/a/6ad9ae64-6526-4747-9b0c-77d113f58c33" },
                { "name": "Wandering Mind", "collector": "251/277", "rarity": "U", "color": "multi", "type": "Creature — Horror", "url": "4/b/4b9a1096-6313-4245-be18-1588c219b842" },
                
                { "name": "Blood Servitor", "collector": "252/277", "rarity": "C", "color": "colorless", "type": "Artifact Creature — Construct", "url": "8/7/87845cc2-bf5d-491d-bfa2-b33b034557a4" },
                { "name": "Ceremonial Knife", "collector": "254/277", "rarity": "C", "color": "colorless", "type": "Artifact — Equipment", "url": "9/c/9ccb4b1e-ef8f-4c5f-8b5b-6148455442f7" },
                { "name": "Honored Heirloom", "collector": "257/277", "rarity": "C", "color": "colorless", "type": "Artifact", "url": "d/3/d3390e4d-9137-40ff-b998-bdb19c90b7d5" },
                { "name": "Lantern of the Lost", "collector": "259/277", "rarity": "U", "color": "colorless", "type": "Artifact", "url": "c/2/c2303f11-2c82-44d5-893a-8e71dece7746" },
                { "name": "Wedding Invitation", "collector": "260/277", "rarity": "C", "color": "colorless", "type": "Artifact", "url": "d/d/ddc22ff6-4081-47ce-bc8a-e063f5f4d044" },

                { "name": "Evolving Wilds", "collector": "263/277", "rarity": "L", "type": "Land", "url": "e/8/e80fe230-745d-42ae-a1f5-a8cc950783d0" },
                { "name": "Plains", "collector": "268/277", "rarity": "L", "type": "Basic Land — Plains", "url": "d/e/deabdaa1-6227-48e4-82d5-63a1771320b2" },
                { "name": "Plains", "collector": "269/277", "rarity": "L", "type": "Basic Land — Plains", "url": "2/b/2b069f97-735a-4d85-8504-b5a863bd659b" },
                { "name": "Island", "collector": "270/277", "rarity": "L", "type": "Basic Land — Island", "url": "5/4/54ddd3aa-593c-4adb-b591-33c15d02131c" },
                { "name": "Island", "collector": "271/277", "rarity": "L", "type": "Basic Land — Island", "url": "5/4/54591ec7-94a1-470c-927a-788b6a514444" },
                { "name": "Swamp", "collector": "272/277", "rarity": "L", "type": "Basic Land — Island", "url": "4/a/4abfe418-15f8-46ce-9b39-fd5a38b25d12" },
                { "name": "Swamp", "collector": "273/277", "rarity": "L", "type": "Basic Land — Swamp", "url": "2/e/2e55a405-bf5b-4158-ba9a-239627ac9701" },
                { "name": "Mountain", "collector": "274/277", "rarity": "L", "type": "Basic Land — Mountain", "url": "8/a/8a4448b6-0dbe-427c-b145-8ac915fc0dfc" },
                { "name": "Mountain", "collector": "275/277", "rarity": "L", "type": "Basic Land — Mountain", "url": "a/6/a6f72e53-52bb-4cf4-9b8b-34ed0c5f7c3c" },
                { "name": "Forest", "collector": "276/277", "rarity": "L", "type": "Basic Land — Forest", "url": "e/4/e4c83b60-3d49-4fdc-a6b7-06d1a0c4a126" },
                { "name": "Stormcarved Coast", "collector": "284", "rarity": "L", "type": "Land", "url": "3/e/3e589848-2c25-43e8-a940-7769f7936815" },
                { "name": "Plains", "collector": "398", "rarity": "L", "type": "Basic Land — Plains", "url": "2/0/20ddb0be-d62d-46fa-b753-36dfab935e8a" },
                { "name": "Island", "collector": "399", "rarity": "L", "type": "Basic Land — Island", "url": "f/8/f82b281f-d3c7-4eb8-9a10-b4808ca6cfcd" },

                { "name": "Bloodcrazed Socialite", "collector": "288", "rarity": "C", "type": "Creature — Vampire", "url": "9/d/9df22639-7e98-43a1-801e-cbf882558c53" },
                { "name": "Restless Bloodseeker", "collector": "295", "rarity": "U", "color": "black", "type": "Creature — Vampire", "url": "c/0/c05a85ef-5ac0-4bd1-8ef1-de2ff84e448d",
                "transform": { "name": "Bloodsoaked Reveler", "type": "Creature — Vampire" } },
                { "name": "Belligerent Guest", "collector": "301", "rarity": "C", "type": "Creature — Vampire", "url": "9/2/924b1c15-811a-4d11-a481-f904002a6740" },
                { "name": "Blood Petal Celebrant", "collector": "303", "rarity": "C", "type": "Creature — Vampire", "url": "4/5/4592609d-48f5-4762-b95c-b2eaa2ea4d51" },
                { "name": "Voldaren Epicure", "collector": "308", "rarity": "C", "type": "Creature — Vampire", "url": "f/e/feda6bb3-ee22-489c-bcfd-52ef04841024" },
                { "name": "Falkenrath Celebrants", "collector": "306", "rarity": "C", "type": "Creature — Vampire", "url": "6/a/6aacc8fa-9440-494b-a3d9-7b1678c5a9f6" },
                { "name": "Katilda, Dawnhart Martyr", "collector": "317", "rarity": "R", "type": "Legendary Creature — Spirit Warlock", "url": "8/6/866828f0-71f7-454b-93a7-2f2ea707f53d" },
                { "name": "Thalia, Guardian of Thraben", "collector": "318", "rarity": "R", "type": "Legendary Creature — Human Soldier", "url": "e/4/e4c7cbfc-e655-4f82-8bde-fbc95461361e" },
                { "name": "Old Rutstein", "collector": "326", "rarity": "R", "type": "Legendary Creature — Human Peasant", "url": "6/2/625b8023-2ef1-4b7b-9e48-4f774fee14e0" }
            ]
        }
    ];
});