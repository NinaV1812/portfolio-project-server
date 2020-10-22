"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "gameMovies",
      [
        {
          gameId: 1,
          movieId: 1,
          overview:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula lacus, maximus non est porta, finibus ornare sapien. Aliquam blandit justo id facilisis malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut mi est, faucibus venenatis blandit ac, posuere at sapien. Proin vitae metus non erat mattis finibus.",
          title: "title",
          release_date: "2020-12-26",
          vote_average: 4.5,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          gameId: 1,
          movieId: 2,
          overview:
            "Curabitur eget magna risus. Duis sodales dignissim ante, sed laoreet leo ultricies semper. In iaculis leo eget pulvinar imperdiet. Ut volutpat posuere dolor nec egestas. Donec quis nisi erat. Nullam quis massa eu justo semper sodales. Nulla mattis luctus justo vel sodales. Fusce et velit vel ipsum accumsan cursus ac at elit. Nulla a dictum urna. Aenean feugiat vehicula luctus. Mauris vitae suscipit lectus.",
          title: "title",
          release_date: "2020-11-15",
          vote_average: 7,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          gameId: 2,
          movieId: 3,
          overview:
            "Fusce rutrum volutpat turpis iaculis vehicula. In ac accumsan urna. Maecenas congue magna eu lacus rhoncus aliquam. Vivamus aliquet sapien vitae hendrerit egestas. Nulla vel arcu lacus. Vestibulum sed ornare metus, eget cursus ligula. Curabitur posuere vitae ipsum sed auctor",
          title: "title",
          release_date: "2020-11-24",
          vote_average: 6.3,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("gameMovies", null, {});
  },
};
