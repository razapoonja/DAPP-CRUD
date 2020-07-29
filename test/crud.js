const Crud = artifacts.require("./Crud.sol");

contract("Crud", () => {
    let crud = null;

    before(async () => {
        crud = await Crud.deployed();
    })

    it('Should create new user', async () => {
        await crud.create('John');

        const user = await crud.read(1);

        assert(user[0].toNumber() === 1);
        assert(user[1] === 'John');
    });

    it('Should update a user', async () => {
        await crud.update(1, 'Jane');

        const user = await crud.read(1);

        assert(user[0].toNumber() === 1);
        assert(user[1] === 'Jane');
    });

    it('Should not update a non-existing user', async () => {
        try {
            await crud.update(2, 'Jane');
        } catch(e) {
            assert(e.message.includes('User does not exist!'));

            return;
        }

        assert(false);
    });

    it('Should destroy a user', async () => {
        await crud.destroy(1);

        try {
            await crud.read(1);
        } catch(e) {
            assert(e.message.includes('User does not exist!'));

            return;
        }

        assert(false);
    });

    it('Should not destroy a non-existing user', async () => {
        try {
            await crud.destroy(10);
        } catch(e) {
            assert(e.message.includes('User does not exist!'));

            return;
        }

        assert(false);
    });
});
