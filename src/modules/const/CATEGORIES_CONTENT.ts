const traditionalCategories = {
    detective: "Детективы",
    fantasy: "Фэнтези",
    scifi: "Научная фантастика",
    horror: "Ужасы",
    love: "Любовные романы",
    thriller: "Триллеры",
    history: "Историческая литература",
    poem: "Поэзия",
    comedy: "Комедия",
    melodrama: "Мелодрама"
};
export default {
    children: {
        tale: "Сказки",
        poem: "Стихи",
        story: "Рассказы и повести",
        encyclopedia: "Энциклопедии и учебники",
        interactive: "Раскраски и интерактивные книги"
    },
    foreign: traditionalCategories,
    classic: {
        russian:"Отечественная классика",
        world: "Мировая классика",
        novel: "Романы",
        poem: "Поэмы",
        drama: "Драма",
        tragedy: "Трагедия",
        comedy: "Комедия"
    },
    local: traditionalCategories,
    religion: {
        christianity: "Христианство",
        islam: "Ислам",
        buddhism: "Буддизм",
        judaism: "Иудаизм",
        restReligions: "Прочие религии",
        theology:"Теология"
    },
    comics: {
        marvel:"Marvel",
        dcComics: "DC",
        restComics: "Прочие комиксы",
        manga: "Манга",
        manhwa: "Манхва",
        manhua: "Маньхуа"
    }
}
