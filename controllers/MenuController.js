const { Menu } = include('database');

exports.getMenu = async (req, res) => {

    let menuItems = await Menu.find({});
    res.send({ success: true, menuItems });
};