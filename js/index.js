(async function () {
    async function getCart() {
        const url = "./__in/data.json";
        try {
            const res = await fetch(url).then((res) => res.json());
            return res;
        } catch (error) {
            console.log(error);
        }
    }

    const tempArr = await getCart();
    const allTags = [];
    for (const element of tempArr) {
        element.tags.forEach((element) => allTags.push(element));
    }

    //1
    const getAllDomElements = () => {
        return document.querySelectorAll("*").length;
    };

    //2
    const getUniqueQuantityList = () => {
        const count = {};
        allTags.forEach((i) => {
            count[i] = (count[i] || 0) + 1;
        });
        return count;
    };

    //3
    const getLengthQuantityList = () => {
        const obj = {};
        const allTagsLengthArray = allTags.map((item) => {
            return { tag: item, lengthTag: item.split("").length };
        });

        allTagsLengthArray.forEach((element) => {
            index = element.lengthTag;
            if (obj[index]) {
                obj[index] = [...obj[index], element.tag];
            } else {
                obj[index] = [element.tag];
            }
        });
        return obj;
    };

    const allDomElements = getAllDomElements();
    const count = getUniqueQuantityList();
    const obj = getLengthQuantityList();
    console.log(allDomElements);
    console.log(count);
    console.log(obj);
})();
