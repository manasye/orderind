<template>
  <v-container class="text-center">
    <h2 class="mb-3">Metode Pembayaran</h2>
    <h4 class="price mb-7">Pilih salah satu metode pembayaran</h4>
    <payment-card
      v-for="p in methods"
      :key="p.name"
      :payment="p"
      @click="proceedPayment"
    ></payment-card>
  </v-container>
</template>

<script>
import PaymentCard from "../components/PaymentCard";
import config from "../config";

export default {
  components: { PaymentCard },
  data() {
    return {
      methods: [
        {
          logo:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAAChCAMAAABkv1NnAAABPlBMVEX///8JWKOw0Tr///7///tmpdv8/////f/6//////qw0jaw0TwFWacAVKT///hSfavF3HiuzzvR45Lq8cGszTHO4oXz/NOu1S8MWJ+szCb///WtzEEhYKDh7rLt+v8MWJynvdf3+eMASJjr8sjL3OgASZGBpMWcttDE3e5iirUHWKoAQ5ADWqiTrsxph7Xm9//b6fQQU6hgpuBkp9cARYsAR50tYKjv/v8NUJD//u0ATZoAV7AARYUhWpKxzuKBo7sAQ54wZKF7pc6Dr9FVqOpom82+3u9poePW9Pr8/9+7zmq10FvT5KGawd1lp8/s8dF9mLxRe7RNc5zt97zA0n6sxkbd756sx+fe5vBukb9HbqOzylQzYpVxkrKxw9YARKhYi6mhuMZBcbLG098AO5IDV7h6krATToLd5rcALIwnVbybAAAVOUlEQVR4nO1ci0LbxrYdeSZ6GElg42BZIhYYBLZsaova10YGJ5BCIcAJeZDeUKAnbU+b+/8/cPeekYNsEshp44Qms5KWCMkjzfJ+zx4RIiEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISFx56DrhNk2I3pXhyPGGP3ST/QPga7aVO3urT7e2Xl83NJVQxL3caC2rQ++v3dvff2HH9Z3V/ZU/Us/0T8ElJbXdtcB9xDr9xZAZaXQfQzKO/cEaZy49d1jnbIv/Ux3ByBD9J3Zx594QPF3+tr6D0PSkMD13YEuiXsHRjTKNM09eJCfuf9gkWhwCKQxW93bvTeC73/c3de+9OPeIVCk7iB/WshMFQrezIFGNlyqMqaDoq5/nyZu/d7xl37YuwTbJmTuiVfKTnk5+Ht4QG2NqpS27q2vj4nc+o50rFdwqXZwmMtkctliMZvJFg8PQFtBgwejrIGf+Nf6j60v/bR3CLam5QvZqalsNpfLwY/CEXBJmHp8nbgffqzeOhydTMRCGbe8iImM/99DtbUNDwRuiKznLYILYPrjMeLufQ9GbvDhgWBiQBp13YlkGMy1qaYxcPZ3JZRUDfK0kEkTV1iCiITp4xJ373sISPY+PBCGMTAzTZuM59XQ3RNV19WJDP/fA77B2WKauFzpLXhVqo7bOE7c8ocHYjbImm1QY8OewGNCeKS7YEJA9CYw+l8BzPJB8UpVpzKZ0luboVfdvU7cTvfDA2nCvFEyGYnTT549ezb9bPr57Wb288Al2oNSirhspjRLMY7rfn+duOMbDMyLlzMcRxsTsXH6dGQpiuV0bhD6zwowS4teMYM+FYnL5YqnT4XjGuwiWSO+oWp8eKDZEgxSyBZnJpLQMnXaMh0n9O8QccSdyXkehCPCxhVeJhPvPr6XjoB5ln8DJ7OlKRwhO0O+DeLAKLGl02wmIS5bPF1KikesuZsujqyvP76xOvKtEcfQUb3KZbNTwtB5RxuGy5mzaWtnd5hsrd/bfVy+UQm/NeIMQm1qvD0tZXOop95bV0skTqWsPAzmgLfBLRHUnSJOHXtYDaGquIQyBn6G/+SHEMTTJDl5b3SAZ8VpCPgZfOgg/7MHGX5+Lh1OAIGtn3Z2Qex2BuXbnvXOEKcCxkvVNgKi5+vxszjDP4PgvFF+/N7g4Oo0Hw2ifs1dXFx0r9Hsunp3f7+rM/u2sPauEMfzWcMYXZPjcsXnPHY15WfgE6rOPyCKunwM27g+EZHyJbeg/GtgBmaD9mhcjtkniONQnG/EXSEOdUkQlKLO4FzCrK+RwUkArUu0GInjRDIGAvWewako9fLPGDbFaiYSxEblCs6oQuVt97ZU5zMRV7mNOL1bLpe7IAupOorWLCcYU1VK3p0QPFMeqXbFb0QCPnI9r2Dw080m3ERjiwcci2MSx+yNRfH7W9OB2VJu4sQpvtmpEpWLFUkrAWiG7sLUW6u1s/ke4PzsZNAFZ6Dh9KnWjpUg7vWC8+7IujrTWvUA0FM2/5doFPyiQZYff7ft4xDb0yvLYOlAmgTZ+G9CmguvxR2CXv0N/CLv5Qq5QsHLixE1tkFUe+7V/cOfTz3A6c9PZl7Noc6CGUy7JhG4oKzOFopTU5MmbivsHKMdVrnjvKKAMQ2M8OB5uwJ5GcIMrfbmSQt0hp+vWQ0lVJSw/hsdIY6sxHi13z9TUQdtfeG8HeMQpqI4ZlzfWmkyNzGMlKlqdXqzHos7WM4vy8B0vpDBIDh3X4zoMrLx4uVpLjPMJ+Dn6c8vZ10NSxRp6QOhNAhq+FGmiCI3YYkLQ5ANPFTpSMhBbbv7uq2EYYPPylEaDcWKgmN1g5/eayMXThhfjD58d0uwUFkgaN7Lzx+FYQif5mwqYT981NvTk3zAJuVa3YLTfsLcfJddJ44uzkDemSSwHDmvWPRezkG4POonqO2CxLmzkH14EydOURpm+6KqU3fDpennoK4+HTdMUxnCbMC/G/UTYeD1c/FLs1emV1VqSqp18ftemRma3fUj33eUZBT84TvRo2PhMRlrnsfh1Wmlc6Fq48RpZAkSfy5nV8AViZL3FEzB1ZeGmgC/2Fi672GZYNLEmZY/H4ESnq/sdUdER9P0lQrql2kpKYRmfZUzZK/GiuM4ZhhfCgOZ4KIvWLhAc9N9HoVAnKMkxCn4kbBfr3LJpt0zSwijOO388oZdI47MnqK0TWVSxPGkDNdySMrGwXdnH8weHRayXgbOgoBOmjg/NAFWZ3utpVMDnlzoq7a3GQIvjhPhfFEqgIAIJrpVhhiNsmYbzgGT1jRIxTB0YM1eiGLsBFVDJ/Zlx0c5MxX+YZBX+D+c753p3JavBqEJx2A+zQZc0Oi0jBHicNqLp8Up0DtMX3M5LweixMtOWTgqzWxoIkzkS/4bc/lDr5DltGYnTlxamuL2c+CO2VzwGNmJHcWJlPmwH1UA8VCj4oHBdKaTWiJbnX3wI1zJVdVYACn1HVPZ7hpgMM98p+8jL2YcBHHFAdLgZKi0wZGrpLuFIsv9TqfTgVugh04TB2GwcZQrengMElYsFQDF7JQ3lQOv6WW9F+AdDFzFJnQu/wRYS4nl1Ocibt4P+/1fKv/eT9RO37ZME2cZbJ0MBoPLi54VCqZqhEJmRAeVhMg3JHlAiF2nQSZ90N8V4qqkWQd5nQfegrO1QXVwWWv3+xA6Nsx4jaiMLAcmKmoYBuerg2q11WpSUO8UcRABuoeJoYcfP8/kX73KvzwE7uAwB5fkbbQSVKMHL70iMJvJfQHiTAumMe/049/EeVA6dIdhVOtisO6S/a3k6m2d4LJid0uIoHOmJ2EBZa1N/IwZBi0U3L1HDSfyG2Gw0gXbzYhe3QSTh7e6AMEmCxVu4cK41gUXbruUQjgxqqraYgkNPdqswweLwiAcvDpFHlFnDzd4EGK/wNX/qcyIA/lsxGFU4G/5/WhTrEE0gQMTFLXSggRS18FpXQZCxOZ1qmNmtBbzY79TNTT+hIw+jsGiwaBnKgORGjyCeG7eMbe7VBcJ/IrFbZ01rYNwrUUhehfleddIMl/Q3zRxIEpPS5kMJ+lwDhLYpM7y1EMjlpkqnS4SdKcvTktZCI1z70rHkyeOB1C/ViqKIlzkfyJ/yznn5dVmD0y5OW8phovVHph1sx5y4rZ0Q4eYj7YCEZ1FD6kgjurnJg/XggUCNJFB3fHDeV+pqRuYuVLd+OlRH/UdiUPi4Q6gqGvEhawXSANu6RhxSwW+rp8tvGKY3YNBA+7cGRBBMHIlbxGdzOJhNudNgf7iwlg2W8gdZj8DcaZTWW4en9U74TvZCwbMVWk57juNyOmbXa4hzNaabR4LmyhxoKlg0EDT4I/p69gcAzNfroR+A9x0r8lvMegp4C2VqKYavJ6nG4NHfR7pfqcbGl3jGYMTrabjoJFwxCazYoU6l5tLk/CghBx5RW8RW0uOSsOUAljzDh8cfIZcVRBnE721tl0JG4nmTutgllu/dypRJ34Ui7oh6GsicYI4otsM3ANKGKRdEA+g8l6A8nH3IXKDn+oRoN+pEVcYcTIIfEcQx94RZ62m5/dxxBWGxGGg/qSYEAes5edsTVuafHUEiFMqy+DPDVuvTgfC2ptcYMoPEwgSmEsGlf4IcXbZ59lEaF2ohsoMVva5azDbeyJ9Xf7j4cMV+POGt9szcLQrcah8CuLeSRwI65wn1naypy+XNjDH30CJm3CSL4hzsWALad6FsPZhsIzZC85dBRVzk7iuummmJA6IomQngFjDd8J2E46pPqhgeOuYW93RfhQKwTBW47rHm5CsflLiwAi8KCQNE3kXElUbJPsz1OPeSZztgvUHCeLMtJE4YA6+Pf4Xri5fnnX6jp+SOFvVgUtgah487yVRKe3+GyMRx7dWyHC5ATtfsNMCj1tvtjs82fikxNnaiwKP3rKHBxqYBFwX+zzEOaKQSRmo5DTPSxtBFf2obatAHoTypDyoBZWrgE8QxzGNORN4g2mwgW6rIy7otJKSJ+Xpv8pcg7QWzupXoQ8QRzX1b9k4uIYTR8mSaJvIztBh5vdZiSPjxBGxrkDKv1302sOk4Yo4oYvHPG4DXW1h6pkQB5noUFX5SgNpDqaDSjQsHg2J+3vOAaO7MeLYlybO5MQBNeAxli+cRxGkENeIE59p/mnyJB1yKKafiTpKvIB6m9yEku7gu17FMtMjCOKSkuenk7g7QhykWfr+r3XFuRKUaxIHAQivPJnWtm5X6yLMq5e1ZE0G7KQ+2K5EmJRcVd2+duI0m+0FWNnAnMK5Rhz/DCXVwMGahwmDnIhqifXM1nRREgVFf9O2MKtykrrSN0Ac0Tb2ezyzNBVuxxohSs6oxAFFZxGXyHil6/cVrKbEv6nDdUTNHdTneeznQMZqKn0/7vPCpVUjKiaugsVVklrr+KcTR+GJapbQUh9Ia1Tq2zs9f4w4sPCJRzC3j4PQAeIaPcitkvUbrbsViTIpMhpGm893o3HiTFyd+JqII2y5Hs4LUhRns7dTVbvpXFUMorrNQIihgkOBSgYr5GpL1uDRfyAeNs1GI4zbW49bZE9ENSMS97URRx5HoZC4OLgYdHV7o/n7f8YkDowZqUUJu7zAomy2eJuNuMc0aDfcouFv9laWVZhYspQzInHx10WcRmqOwg8rJ2WIYSFJ32+HYxJnu5q9l0RvIJe8Ekewy0QQoUeNrQi01+mt6iomEXSv0rimqn+ZuBvjuMnnqh+SOHXb4Qun1gVfxaK60WxfC0cgcdLPzWFFyvQbj95g8JsQV+6g8kLu+0aExCqpXlPVr07iiP4/fDmvEbSS026zbo4Rx8HXqsQZp/GonFqbLXf8aN50wnnRbAMOp8pXHL8B4oAKvuB8nbh349D9zWFSAIFwLV2UROJ8xbfOxIrjN0KcKohTtsrsfcRdTVWtWUNdDYNB+lk5cSYSZ3x7xJn++yXuaqp0UEmaQxyz19VSIidUVQl/FRMYI45NkLhJFjKBptBR4C+WLXHfOzzDtPkuc2D6vOmbYO4dbuN0Xbeb7SFxRnqXAev2+onIxStMS/UONivoX8wQEllm2wbVaTV2eJZVwzLApyAORHmpMDUsK7l4DbNnc7jAmivdn9D+vum+H4ZOGFcJwyZSZnS3E4VbJtTWty0/bPSU+JJ3Adk2+S0JR3zd1lP7WgyyEgniGu0WZamGJxBRNHJhu5osD9qr4kqrpn8i4lyNJpdkn9hwCV5EH3hZD06X7t+w++ZvEReCSDlhdALEMd1wyV7QGBLHV/KdUPEb5nkL389jk9aWiDusbVDVVJ8pY63NxMaddUd6gpuV0InmlVB5vs+P9eU/UTbNMLrAZuyHn4A4ptlLBbHmcIpt6nygmSxfwp4YcZCLgvEPo/paFzVXr54rCXGgnZr6Om7wfgWnV1tdWFidjpO2JRQXPaUEIKk9UfoI3qg03Vqu+0icE4bx1h+rl5drz4IQl1lNs7KKxfVPQZxK7Kc5QVzuyYtFG3tvjjxcmAbi8hPaibsWw8SwESnoTZ+c1M7biiWM2FaXQcB6GWBzEURy/SiO44rVSCpDwcA20k3Qtjqoi5aAoElH3cZOjMRBfo+NO51+1A8dLMwp7danIC7HV7ls93S4fn/65H4+P3PqYV9JJuvljiZCm6btxUoIuuorDcuK+pYVirKREl/A7A2jvIVOVfEhZ1JwYdl3Gpy77S4nDtyi0EobnDG4AF+xviOgqan52a22g7kqb0JxMCNzHO6QajqGye+3cTRfmLp9sQbbvcCSLeLa/kyOS1i2mM2WSqVsqZjFFgmQyDltEiKnafrripMqy/KAAvJTs72vaxq4iwE4AxP7THkrlsjiG8rmHt8LY6i2K7aA0FYbMrPQb1Qux24B9j9ohFe34D12vhn1WtgRJgqZ14hjeXSJtxHn5YCebG4R2xdnc1ncAJZ5B2yeyxaL94k2iR3SkKE3t3wwOVZ0RZwPfrb+GE0/GqvVTbCAIS8AYxnXn59X+mCe8FUB1C7r/NU0MNBaAPruW/358U3LrqvXOn0ubsOvRWmYymYVRv9bxL0toXhlUFVdW3Pve15mKv0WBGSu8ORgIrQR1XBZqxeFjdTqE/b5bj7EWgguRLtk4MdRyJlzfOx87sd/XootHaR8Pn3cFHuseihHfr+zcu0eINWrvcgaihx2GJrx+TKuGQJxJ+9VVZYv8FeP3GzjCqCshdLpHH/JC8uXiukWrxzSeviUuBPxqoxqtt58VrfSxFnB1gCYcSE6Uxncdn/tvJ30JPlOUPdXmhAZY4GI1GKr3atdVgcnfzoNZLbfbl37hjVwzq2Vrc3AspCi0Ao2z9e6kG2Rm4njTvEG4p4+eHv0APAWO+CxlfWBV/CyKeIKpzNzVLu+Qe/TEIf99Gq1FlTi2AKA54zPLrt8kyM8s6HrKtug3eqb3WfbgF9fv6mWQRBBHEFBL+vY6xtWgthqNHhrr5V02qQA0SGudJWrq6/5EM9eLyx3+e4GII4BcWgEzGhhpGubHZ0eArzDPMbWgrhspjBCHIiZTZJ1Ng2CTJjK0aEHIgi+IVso5LyZWRdfDTLRN4OozeWFlZNa7fXO2uDjXrujae4+7zIxrxyKGbaX6c2vO0rvBeC7eE74+pkJEpc6ZbiuLYA74YzZQla0b83d9qY9trh0lL9//37+6MHSAZv8e/nQ3Nh8PxW1N256T0dKm9zuM9y+YF611EFEc0GMW94TlaKH4cFJBBGQ5WMXYvp5uO/hP8ArCuI8zzu4NWEfyhe2CU3oVS2j9+O7+hJ81Ltb6Mbl/ymN8KoKhzFer2ncRlwKqGHkDzCcPqR8x+SDt7WFqhZR4m6x9MyF71/sKh6+tG+C4G0xxnCj5AdMgpCA1LHRXTgP4iviwKe2B5SpN8jE+BAYYp38jl36QX3hPdtYOZhGn2KHPhit06f0tuACpIzZCXW4f/OWy/8ecE8k7n0DcIF7/x5mNvLmXdwet6G21vxOJDI0BfztMbF1/YZ9pGMvv4LRbL2VoOymVZUNQXE/28bBIuLprEFv2aUKV2tcBj7Pu6L+2k3Esy0/PAvq9UqlvvVHS7zh8i/e+eM+91n4mDwM3CKvN1vLy8stiMwmEjF9lVANm2nwHwUdMYwPWSmJa1Cx7VC8t8Fm4+/WkPgwWBKXYxz4pZ/lH4VhfDHZtEZCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJC4iPx/+QMuNdi0+weAAAAAElFTkSuQmCC",
          name: "Bayarind",
          detail: "Rp 1.000.000"
        },
        {
          logo:
            "https://i0.wp.com/www.desaintasik.com/wp-content/uploads/2018/08/LogoBankBRI1-dt-e1555041402382.png?resize=249%2C162",
          name: "BRI",
          detail: "Transfer ATM, Mobile Banking"
        },
        {
          logo:
            "https://upload.wikimedia.org/wikipedia/id/thumb/f/fa/Bank_Mandiri_logo.svg/1280px-Bank_Mandiri_logo.svg.png",
          name: "Mandiri",
          detail: "Transfer ATM, Mobile Banking"
        },
        {
          logo:
            "https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/1280px-BNI_logo.svg.png",
          name: "BNI",
          detail: "Transfer ATM, Mobile Banking"
        },
        {
          logo:
            "https://upload.wikimedia.org/wikipedia/id/thumb/e/e0/BCA_logo.svg/472px-BCA_logo.svg.png",
          name: "BCA",
          detail: "Transfer ATM, Mobile Banking"
        }
      ],
      merchantId: config.merchantId,
      quantity: this.$route.query.qty,
      itemId: this.$route.query.itemId
    };
  },
  methods: {
    proceedPayment() {
      fetch(config.host + "/orders", {
        method: "post",
        body: JSON.stringify({
          merchantId: this.merchantId,
          quantity: this.quantity,
          itemId: this.itemId
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(response => {
          console.log(response);
          if (response.status === 200) {
            this.$router.replace(`/order/${response.data._id}`);
            this.$toasted.success("Order successfully created!");
          } else {
            this.$router.go(-1);
            this.$toasted.error("Something went wrong :(");
          }
        });
    }
  }
};
</script>
